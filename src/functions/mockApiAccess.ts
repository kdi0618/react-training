//key に対して　valueを保存する
//300ミリ秒後にPromiseがResolveされ、保存が完了する
export const setValue = (key: string, value: string): Promise<void> => {
  const response = new Promise<void>((resolve) => {
    setTimeout(() => {
      localStorage.setItem(key, value);
      resolve();
    }, 300);
  });
  return response;
};

//key に対して保存されたvalueを取得する
//300ミリ秒後にPromiseはResolveされる
export const getValue = async (key: string): Promise<string | undefined> => {
  const response = new Promise<string | undefined>((resolve) => {
    setTimeout(() => {
      resolve(localStorage.getItem(key) || undefined);
    }, 300);
  });
  return response;
};

//key に対して保存されたvalueを削除する
//300ミリ秒後にPromiseはResolveされる
export const deleteValue = async (key: string): Promise<void> => {
  const response = new Promise<void>((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(key);
      resolve();
    }, 300);
  });
  return response;
};
