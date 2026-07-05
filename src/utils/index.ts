export function success(data: unknown, msg: string) {
  return {
    code: 0,
    data,
    msg,
  };
}

export function error(msg: string) {
  return {
    code: -1,
    msg,
  };
}
