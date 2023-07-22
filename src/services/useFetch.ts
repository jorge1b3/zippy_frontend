import { useEffect, useState } from "react";
type useFetch = (a: string) => void

export const useFetch: useFetch = (url) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState();

  useEffect(()=>{
    const abortController = new AbortController();
    setController(abortController as any);
    setLoading(true);

    fetch(url, {signal: abortController.signal})
    .then((response) => response.json())
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally(()=> setLoading(false))

    return () => abortController.abort();

  },[]);

  const handleCancelRequest = () => {
    if (controller){
      controller.abort()
      setError("Request Cancell" as any);
    }
  }
  return {data, loading, error}
}