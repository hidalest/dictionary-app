import { useEffect, useState } from 'react';

// type JSONValue = string | number | boolean | JSONObject;

interface JSONObject {
  word: string;
  phonetic: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [{ definition: string; example: string }];
      synonyms: string[];
    }
  ];
  phonetics: [{ text: string; audio: string }];
  sourceUrl: string[];
}

const useGetFetch = (applyAction?: (data: JSONObject) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedData, setFetchedData] = useState<JSONObject | null>(null);

  const sendRequest = async (url: string, word: string) => {
    setIsLoading(true);
    setError(false);
    setFetchedData(null);

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(url + word, { signal: controller.signal });
      clearTimeout(id);
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error(
            'Something went wrong, and it is not your fault. Please try again later.'
          );
        }
        throw new Error('Something went wrong. Please try again later.');
      }

      const [data] = await response.json();
      setFetchedData(data);
    } catch (error) {
      console.log('🚀 ~ file: fetch.tsx:16 ~ sendRequest ~ error', error);
      setError(true);
    }
    setIsLoading(false);
  };

  return {
    sendRequest,
    isLoading,
    fetchedData,
    error,
  };
};

export default useGetFetch;
