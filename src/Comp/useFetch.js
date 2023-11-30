import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return data;
};

export default useFetch;
