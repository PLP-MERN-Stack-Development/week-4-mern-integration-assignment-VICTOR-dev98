import { useState, useEffect } from 'react';
import api from '../api';

export function useApi(getFunction, ...params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFunction(...params)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [...params]);

  return { data, loading, error };
}
