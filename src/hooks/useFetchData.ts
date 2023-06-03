import { useEffect, useState } from 'react';
import { DocumentFileType } from '../components/DocumentList/DocumentList.types';
import { fetchData } from '../api/api';
export const useFetchData = () => {
  const [data, setData] = useState<DocumentFileType[]>([]);

  useEffect(() => {
    const updateData = async () => {
      const response = await fetchData();
      setData(response);
    };
    updateData();
  }, []);

  return { data, setData };
};
