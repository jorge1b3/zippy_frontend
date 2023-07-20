import { Either } from "./monads.js";
import { FetchOptions } from "./types.js";
class NetworkError extends Error {
  readonly code: number;

  constructor(code: number, message: string) {
    super(`${code}: ${message}`);
    this.name = "NetworkError";
    this.code = code;
  }
}
const isRejected = (
	input: PromiseSettledResult<unknown>,
): input is PromiseRejectedResult => input.status === "rejected";

const isFulfilled = <T>(
	input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

type request = <T>(options: FetchOptions, url: string) => response<T>
export type response<T> = Promise<Either<never, T & ({} | null)> | Either<Error, never>>

export const getData: request = async (options, url) => {
  try {
    const data = await Promise.allSettled([
      fetch(url, options).then((response) => {
        if (!response.ok) {
          throw new NetworkError(response.status, response.statusText);
        }
        return response.json();
      }),
    ]);

    const response= data.find(isFulfilled)?.value;
    const error = data.find(isRejected)?.reason;

    if (response !== undefined) {
      return Either.right(response);
    } else if (error !== undefined) {
      return Either.left(error);
    } else {
      return Either.left(new Error("Unexpected Promise state."));
    }
  } catch (error) {
    return Either.left(error as Error);
  }
};
