import { useCallback, useEffect, useState } from 'react';

const useServerStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latency, setLatency] = useState(0);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    const startTime = new Date();
    try {
      await fetch('http://192.168.50.160:8080/api/health/v1alpha1/ping');
      const latency = new Date().getTime() - startTime.getTime();

      setIsError(false);
      setLatency(latency);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(fetchData, 5000);

    return () => clearInterval(timer);
  }, [fetchData]);

  return { isLoading, isError, latency };
};

export default useServerStatus;
