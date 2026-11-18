export function getApiErrorMessage(error: unknown): string {
  if (isHttpError(error)) {
    switch (error.status) {
      case 400:
        return 'The request is invalid.';

      case 401:
        return 'Your session has expired. Please start again.';

      case 403:
        return 'You are not allowed to perform this action.';

      case 404:
        return 'The requested resource was not found.';

      case 409:
        return 'This request conflicts with the current state.';

      case 422:
        return 'Please check the information you entered.';

      case 429:
        return 'Too many requests. Please wait and try again.';

      case 500:
      case 502:
      case 503:
      case 504:
        return 'The server is temporarily unavailable. Please try again later.';
    }
  }

  return 'Unable to connect to the server. Please check your connection and try again.';
}

function isHttpError(
  error: unknown,
): error is { status: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof error.status === 'number'
  );
}
