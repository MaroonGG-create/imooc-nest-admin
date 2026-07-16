export function success(data: unknown, msg: string) {
  return {
    code: 1,
    result: data,
    message: msg,
  };
}
export function successCount(data: unknown, count: number, msg: string) {
  return {
    code: 1,
    result: data,
    message: msg,
    count,
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

export function wrapperCountResponse(dataPromise, countPromise, msg) {
  return Promise.all([dataPromise, countPromise])
    .then((res) => {
      const [data, countArr] = res;
      const [count] = countArr;
      console.log(count);
      
      return successCount(data, count.count, msg);
    })
    .catch((err) => error(err.message));
}
