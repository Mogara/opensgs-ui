import { Loading } from '@nextui-org/react';
import classNames from 'classnames';

import useServerStatus from '../hooks/useServerStatus';

type StatusProps = {
  isError: boolean;
  latency: number;
};

const Status = ({ isError, latency }: StatusProps) => {
  const className = classNames('h-7', 'w-7', 'rounded-full', 'my-1', 'flex', {
    'bg-red-500 error': isError || latency >= 500,
    'bg-green-500 success': !isError && latency < 100,
    'bg-yellow-500 warning': !isError && latency >= 100 && latency < 500,
  });
  return (
    <div className={className} data-testid="status">
      {!isError && (
        <div className="text-xs text-white m-auto">
          {Math.min(latency, 999)}
        </div>
      )}
    </div>
  );
};

type ServerStatusProps = { className?: string };

const ServerStatus = ({ className }: ServerStatusProps) => {
  const { isLoading, isError, latency } = useServerStatus();
  return (
    <div className={className}>
      {isLoading ? (
        <Loading size="xs" />
      ) : (
        <Status isError={isError} latency={latency} />
      )}
    </div>
  );
};

export default ServerStatus;
