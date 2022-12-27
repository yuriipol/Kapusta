import { ReactComponent as Alcohol } from '../../shared/images/ReportsImages/expenseType/alcohol.svg';
import { ReactComponent as Communal } from '../../shared/images/ReportsImages/expenseType/communal.svg';
import { ReactComponent as Education } from '../../shared/images/ReportsImages/expenseType/education.svg';
import { ReactComponent as Entertaiment } from '../../shared/images/ReportsImages/expenseType/entertaiment.svg';
import { ReactComponent as Health } from '../../shared/images/ReportsImages/expenseType/health.svg';
import { ReactComponent as Hobbies } from '../../shared/images/ReportsImages/expenseType/hobbies.svg';
import { ReactComponent as Housing } from '../../shared/images/ReportsImages/expenseType/housing.svg';
import { ReactComponent as Other } from '../../shared/images/ReportsImages/expenseType/other.svg';
import { ReactComponent as Product } from '../../shared/images/ReportsImages/expenseType/product.svg';
import { ReactComponent as Technique } from '../../shared/images/ReportsImages/expenseType/technique.svg';
import { ReactComponent as Transport } from '../../shared/images/ReportsImages/expenseType/transport.svg';
import { ReactComponent as AddIncome } from '../../shared/images/ReportsImages/incomeType/addIncome.svg';
import { ReactComponent as Salary } from '../../shared/images/ReportsImages/incomeType/salary.svg';

const svgArray = [
  { category: 'PRODUCTS', svg: Product },
  { category: 'TRANSPORT', svg: Transport },
  { category: 'ENTERTAINMENT', svg: Entertaiment },
  { category: 'ALCOHOL', svg: Alcohol },
  { category: 'HEALTH', svg: Health },
  { category: 'HOUSING', svg: Housing },
  { category: 'TECHNIQUE', svg: Technique },
  { category: 'COMMUNAL, COMMUNICATION', svg: Communal },
  { category: 'SPORTS, HOBBIES', svg: Hobbies },
  { category: 'EDUCATION', svg: Education },
  { category: 'SALARY', svg: Salary },
  { category: 'ADD. INCOME', svg: AddIncome },
  { category: 'OTHER', svg: Other },
];
export default svgArray;
