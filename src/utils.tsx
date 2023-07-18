import { FetchOptions } from "./types.js";

class NetworkError extends Error {
	constructor(code: number, message: string) {
		super(`${code}: ${message}`);
		this.name = "NetworkError";
	}
}

const isRejected = (
	input: PromiseSettledResult<unknown>,
): input is PromiseRejectedResult => input.status === "rejected";

const isFulfilled = <T,>(
	input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const getData = async <T,>(
	url: string,
	options: FetchOptions,
): Promise<[T, Error]> => {
	const data = await Promise.allSettled([
		fetch(url, options).then((response) => {
			if (!response.ok)
				throw new NetworkError(response.status, response.statusText);
			return response.json();
		}),
	]);

	const response: T = data.find(isFulfilled)?.value;
	const error: Error = data.find(isRejected)?.reason;

	return [response, error];
};

export { getData };
