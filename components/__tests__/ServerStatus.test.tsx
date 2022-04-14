import { render } from '@testing-library/react';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

import urls from '../../constants/urls';
import ServerStatus from '../ServerStatus';

enableFetchMocks();

it('should render when ping successfully', async () => {
  fetchMock.mockIf(urls.ping, async () => ({
    status: 200,
    body: JSON.stringify({
      status: 'ok',
    }),
  }));

  const { findByTestId } = render(<ServerStatus />);
  expect(await findByTestId('status')).toHaveClass('success');
});

it('should render when ping failed', async () => {
  fetchMock.mockAbort();
  fetchMock.mockIf(urls.ping);

  const { findByTestId } = render(<ServerStatus />);
  expect(await findByTestId('status')).toHaveClass('error');
});

it('should render when network is slow', async () => {
  jest.useFakeTimers();
  fetchMock.mockIf(urls.ping, async () => {
    jest.advanceTimersByTime(200);
    return {
      status: 200,
      body: JSON.stringify({
        status: 'ok',
      }),
    };
  });

  const { findByTestId } = render(<ServerStatus />);
  expect(await findByTestId('status')).toHaveClass('warning');
  jest.useRealTimers();
});
