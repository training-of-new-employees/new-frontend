import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { activationEmployee } from '../utils/axios/Admin/activationEmployee/activationEmployee';
import { createEmployee } from '../utils/axios/Admin/createEmployee/createEmployee';
import { editDataEmployee } from '../utils/axios/Admin/editDataEmployee/editDataEmployee';
import { getEmployee } from '../utils/axios/Admin/getEmployee/getEmployee';
import { getEmployeeById } from '../utils/axios/Admin/getEmployeeById/getEmployeeById';
import { IEditEmployee, IUser } from '../utils/axios/types/IUser';
import { PERSONAL_TABLE } from '../utils/constants';

class EmployeeStore {
  archiveEmployee: Array<number> = [];
  allEmployee = PERSONAL_TABLE;
  employees?: IPromiseBasedObservable<IUser[]>;
  employee?: IPromiseBasedObservable<IUser>;
  employeeById?: IPromiseBasedObservable<IUser>;

  constructor() {
    makeAutoObservable(this);
  }
  addEmployeeToArchive = (id: number) => {
    this.archiveEmployee.push(id);
  };
  rearchiveEmployee = (id: number) => {
    this.archiveEmployee.splice(this.archiveEmployee.indexOf(id), 1);
  };
  addNewEmployee = (user: { id: number; name: string; job: string; status: string }) => {
    this.allEmployee.push(user);
  };
  getEmployeeAdminAction = () => {
    this.employees = fromPromise(getEmployee());
  };

  postCreateEmployeeAdminAction = ({
    company_id,
    company_name,
    email,
    name,
    patronymic,
    surname,
  }: IEditEmployee) => {
    this.employees = fromPromise(
      createEmployee({
        company_id,
        company_name,
        email,
        name,
        patronymic,
        surname,
      })
    );
  };

  postEditEmployeeAdminAction = ({
    users_id,
    position_id,
    company_name,
    email,
    name,
    patronymic,
    surname,
  }: IEditEmployee) => {
    this.employee = fromPromise(
      editDataEmployee({
        users_id,
        position_id,
        company_name,
        email,
        name,
        patronymic,
        surname,
      })
    );
  };
  getEmployeeByIdAdminAction = (id: string) => {
    this.employeeById = fromPromise(getEmployeeById(id));
  };

  activationEmployee = ({
    email,
    password,
    invite,
  }: {
    email: string;
    password: string;
    invite: string;
  }) => {
    this.employeeById = fromPromise(activationEmployee({ email, password, invite }));
  };
}

export default new EmployeeStore();
