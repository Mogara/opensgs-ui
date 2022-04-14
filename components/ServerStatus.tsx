import { Loading } from '@nextui-org/react';
import classNames from 'classnames';

import useServerStatus from '../hooks/useServerStatus';
import styles from '../styles/ServerStatus.module.css';

type StatusProps = {
  isError: boolean;
  latency: number;
};

const Status = ({ isError, latency }: StatusProps) => {
  const className = classNames(styles.status, {
    [styles.error]: isError || latency >= 500,
    [styles.success]: !isError && latency < 100,
    [styles.warning]: !isError && latency >= 100 && latency < 500,
  });
  return <div className={className}>{!isError && latency}</div>;
};

type ServerStatusProps = { className: string };

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
