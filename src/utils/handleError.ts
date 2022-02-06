/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getErrorMessage = (e: any): string => {
  const message = e && e.response && e.response.data && e.response.data.message;

  if (message) {
    return message.toString();
  }
  return '';
};

export const handleStatusCode = (e: any): number | string => {
  const statusCode =
    e && e.response && e.response.data && e.response.data.statusCode;

  if (statusCode) {
    return statusCode;
  }
  return '';
};

export const handleRegularCall = (
  e: any,
  networkError: string,
  serverError: string,
): string => {
  const message = getErrorMessage(e);
  const statusCode = handleStatusCode(e);
  let error = message || '';

  if (!statusCode) {
    error = networkError;
  } else {
    error = serverError;
  }

  return error;
};

export const handleLoginCall = (
  e: any,
  networkError: string,
  loginError: string,
  serverError: string,
): string => {
  const message = getErrorMessage(e);
  const statusCode = handleStatusCode(e);
  let error = message || '';

  if (!statusCode) {
    error = networkError;
  } else if (statusCode === 500) {
    error = loginError;
  } else {
    error = serverError;
  }

  return error;
};

export const handleMessageErrorCall = (
  e: any,
  networkError: string,
  intlMessageError: string,
  serverError: string,
): string => {
  const message = getErrorMessage(e);
  const statusCode = handleStatusCode(e);
  let error = message || '';

  if (!statusCode) {
    error = networkError;
  } else if (intlMessageError) {
    error = intlMessageError;
  } else {
    error = serverError;
  }

  return error;
};
