export function success(data: unknown, msg: string) {
  return {
    code: 0,
    result: data,
    message: msg,
  };
}

export function error(msg: string) {
  return {
    code: -1,
    message: msg,
  };
}
