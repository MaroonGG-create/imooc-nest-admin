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

export async function wrapperResponse<T>(
  p: T | Promise<T>,
  msg = 'success',
) {
  try {
    const data = await Promise.resolve(p);
    return success(data, msg);
  } catch (err) {
    const message = err instanceof Error ? err.message : '请求失败';
    return error(message);
  }
}
