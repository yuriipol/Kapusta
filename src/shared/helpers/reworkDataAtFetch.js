const reworkData = data => {
  const incomesData = data?.incomes?.incomesData;
  const expenseCategory = data?.expense?.expensesData;

  const createArrInObj = obj => {
    const newArrCategory = [];

    for (const category in obj) {
      const objValue = obj[category];
      const newCategory = {
        category: category,
        total: objValue.total,
        data: objValue,
      };
      newArrCategory.push(newCategory);
    }

    const newCategorys = newArrCategory.map(el => {
      const newArrData = [];
      for (const descr in el.data) {
        if (descr !== 'total') {
          const newDescription = {
            name: descr,
            price: el.data[descr],
          };
          newArrData.push(newDescription);
        }
      }
      const newObj = { ...el, data: newArrData };

      return newObj;
    });
    return newCategorys;
  };

  const newExpenseData = createArrInObj(expenseCategory);
  const newIncomesData = createArrInObj(incomesData);

  const newData = {
    expense: {
      expenseTotal: data.expense.expenseTotal,
      expensesData: newExpenseData,
    },
    incomes: {
      incomeTotal: data.incomes.incomeTotal,
      incomesData: newIncomesData,
    },
  };

  return newData;
};

export default reworkData;
