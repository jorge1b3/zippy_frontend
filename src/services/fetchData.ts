export const fetchData = (url: string) =>  {
  const promise = fetch(url)
    .then(response => response.json())
    .then(data => data)
  return getSuspender(promise);
}



const getSuspender = <T>(promise: Promise<T>) =>{
  let status = "pending";
  let response: T | Error | Promise<void>;

  const suspender = promise.then(
    res => {
      status = "success";
      response = res
    },
    err => {
      status = "error";
      response = err
    }
  );

  const read = () => {
    switch(status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  }
  return {read};
}