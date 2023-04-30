import { useState } from "react";

const useHttp = (processData, requestConfig = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-certification-68c63-default-rtdb.firebaseio.com/tasks.json",
        requestConfig
          ? {
              method: requestConfig.method,
              body: JSON.stringify(requestConfig.body),
              headers: requestConfig.headers,
            }
          : null
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      
      
      processData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { isLoading, error, fetchApi };
};

export default useHttp;
