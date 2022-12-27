import { instance } from './auth-api';

export const periodDate = async date => {
  const { data: result } = await instance.get(
    `api/transaction/period-data?date=${date}`
  );

  return result;
};

export const trasactionIncome = async () => {
  const { data: result } = await instance.get(`api/transaction/income`);

  return result;
};

export const trasactionExpense = async () => {
  const { data: result } = await instance.get(`api/transaction/expense`);

  return result;
};

export const trasactionAll = async () => {
  const { data: result } = await instance.get(`api/transaction/all`);

  return result;
};
