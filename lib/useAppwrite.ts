import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: () => any) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
        console.log(error);
      } else {
        Alert.alert("Error", "An unknown error occurred");
        console.log("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
