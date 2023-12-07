import { useEffect, useState } from "react";

import axios from "axios";
import { Alert } from "react-native";
import { JobType } from "../types/jobs";

interface QueryType {
  query: string;
  page?: string;
  num_pages?: string;
  job_id?: any;
}
const useFetchData = (endpoint: string, query: QueryType) => {
  const [data, setData] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "5db14065cfmshfc238562f6adbfbp1afdb1jsn272703163001",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const handleFetchData = async () => {
    setIsLoading(false);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      Alert.alert("Sorry, the API has reached its usage limit.");
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(false);
    handleFetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return { data, isLoading, error, refetch };
};

export default useFetchData;
