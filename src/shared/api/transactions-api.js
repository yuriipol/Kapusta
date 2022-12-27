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

export const postTrasactionIncome = async data => {
  await instance.post(`api/transaction/income`, data);

  return;
};

export const postTrasactionExpense = async data => {
  await instance.post(`api/transaction/expense`, data);

  return;
};

export const trasactionCategoryIncome = async () => {
  const { data: result } = await instance.get(
    `api/transaction/income-categories`
  );

  return result;
};

export const trasactionCategoryExpense = async () => {
  const { data: result } = await instance.get(
    `api/transaction/expense-categories`
  );

  return result;
};
export const trasactionDelete = async data => {
  await instance.delete(`api/transaction/${data}`);
};
