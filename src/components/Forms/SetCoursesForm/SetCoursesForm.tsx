import { useLocation } from 'react-router-dom';
import { COURSE_DATA } from '../../../utils/constants.tsx';
import Checkbox from '../../UI/FormElements/Checkbox/Checkbox.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';

function SetCoursesForm() {
  const InitialValues = {};
  const location = useLocation().pathname;
  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer InitialValues={InitialValues} onSubmit={onSubmit} formName="setCourses">
      <div
        className={
          location.match(/\/choose-courses-for-position\/\w/)
            ? 'grid gap-[15px] grid-cols-auto-fit pb-[20px] pt-[137px] my-[30px]'
            : ''
        }
        role="group"
        aria-labelledby="setCourses"
      >
        {COURSE_DATA.map((course) => (
          <div key={course.id} className="bg-white w-[100%] rounded-[16px] p-[20px] relative">
            <div className="flex gap-[10px] relative justify-between">
              <h3 className="text-h3 mb-[12px] line-clamp-2">{course.name}</h3>
              <Checkbox
                inputName="Courses"
                value={course.id}
                // label={course.name}
              />
            </div>
            <p className="text-bodyMedium text-addFontColor">{course.lesson} урок</p>
          </div>
        ))}
      </div>
    </FormikContainer>
  );
}

export default SetCoursesForm;
