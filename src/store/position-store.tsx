import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { createPosition } from '../utils/axios/Admin/positions/createPosition';
import { editCoursesByPositionId } from '../utils/axios/Admin/positions/editCoursesByPositionId';
import { editNamePositionById } from '../utils/axios/Admin/positions/editNamePositionById';
import { getCoursesByPositionId } from '../utils/axios/Admin/positions/getCoursesByPositionId';
import { getPositionById } from '../utils/axios/Admin/positions/getPositionById';
import { getPositions } from '../utils/axios/Admin/positions/getPositions';
import { IEditEmployee } from '../utils/axios/types/IUser';
import { POSITIONS_DATA } from '../utils/constants';

class PositionStore {
  archivePositions: Array<number> = [];
  allPositions = POSITIONS_DATA;
  positions?: IPromiseBasedObservable<any>;
  position?: IPromiseBasedObservable<any>;
  positionById?: IPromiseBasedObservable<any>;
  courseByPositionId?: IPromiseBasedObservable<any>;
  coursesByPositionId?: IPromiseBasedObservable<any>;
  constructor() {
    makeAutoObservable(this);
  }
  addPositionToArchive = (id: number) => {
    this.archivePositions.push(id);
  };
  addNewPosition = (position: { id: number; name: string; courses: number; personal: number }) => {
    this.allPositions.push(position);
  };
  rearchivePosition = (id: number) => {
    this.archivePositions.splice(this.archivePositions.indexOf(id), 1);
  };
  getPositionAction = () => {
    this.positions = fromPromise(getPositions());
  };

  getPositionByIdAction = (id: string) => {
    this.position = fromPromise(getPositionById(id));
  };

  postCreatePositionAction = ({ company_id, name }: IEditEmployee) => {
    this.position = fromPromise(createPosition({ company_id, name }));
  };

  getCoursesByPositionIdAction = (id: string) => {
    this.courseByPositionId = fromPromise(getCoursesByPositionId(id));
  };

  postEditCoursesByPositionIdAction = (id: string, course_id: number[]) => {
    this.coursesByPositionId = fromPromise(editCoursesByPositionId(id, course_id));
  };

  postEdiNamePositionIdAction = (id: string, name: string) => {
    this.positionById = fromPromise(editNamePositionById(id, name));
  };
}

export default new PositionStore();
