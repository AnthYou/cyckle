import React, { useEffect, useState } from 'react'
import { Bike } from '@/utils/interfaces';
import useHttp from '@/hooks/use-http';

const AvailableBikes = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const { isLoading, error, sendRequest: fetchBikes } = useHttp();

  useEffect(() => {
    fetchBikes({
      url: '/api/v1/bikes',
    }, (bikesData) => {
      console.log(bikesData);
    });
  }, [fetchBikes]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default AvailableBikes;
