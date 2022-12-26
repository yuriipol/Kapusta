import { instance } from './auth-api';

export const periodDate = async date => {
  const { data: result } = await instance.get(
    `api/transaction/period-data?date=${date}`
  );

  return result;
};
