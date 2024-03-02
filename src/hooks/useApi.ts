import { useCallback, useEffect, useState } from 'react';

function useApi<T>(apiCall: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    const response = await apiCall();

    setData(response);
  }, [apiCall]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}

export default useApi;
