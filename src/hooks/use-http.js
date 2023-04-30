import { useState } from "react";

const useHttp = (processData, requestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async (task) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-certification-68c63-default-rtdb.firebaseio.com/tasks.json",
        task
          ? {
              ...requestConfig,
              body: JSON.stringify({ text: task }),
            }
          : null
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      processData(data, task);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { isLoading, error, fetchApi };
};

export default useHttp;
