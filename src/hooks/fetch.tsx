import { useEffect, useState } from 'react';

type JSONValue = string | number | boolean | JSONObject;

interface JSONObject {
  [x: string]: JSONValue;
}

const useGetFetch = (applyAction?: (data: JSONObject) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState<JSONObject>({});
  const sendRequest = async (url: string, word: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url + word);
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error(
            'Something went wrong, and it is not your fault. Please try again later.'
          );
        }
        throw new Error('Something went wrong. Please try again later.');
      }

      const data = await response.json();
      setFetchedData(data);
      setIsLoading(false);
      if (!applyAction) return;
      applyAction(data);
    } catch (error) {
      console.log('🚀 ~ file: fetch.tsx:16 ~ sendRequest ~ error', error);
    }
  };

  return {
    sendRequest,
    isLoading,
    fetchedData,
  };
};

export default useGetFetch;
