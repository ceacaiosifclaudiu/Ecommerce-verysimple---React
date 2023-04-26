import React from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
