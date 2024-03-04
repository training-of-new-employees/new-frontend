import Checkbox from '../../UI/Checkbox/Checkbox.tsx';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

const courses = [
  { id: '1', label: 'Course 1' },
  { id: '2', label: 'Course 2' },
  { id: '3', label: 'Course 3' },
  { id: '4', label: 'Course 4' },
  { id: '5', label: 'Course 5' },
  { id: '6', label: 'Course 6' },
];

function SetCoursesForm() {
  const InitialValues = {};

  const Validation = () => {
    const errors: ValuesTypes = {};
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Отрыть доступ"
    >
      <div role="group" aria-labelledby="setCourses">
        {courses.map((course) => (
          <Checkbox
            key={'SetCourse' + course.id}
            inputName="Courses"
            value={course.id}
            label={course.label}
          />
        ))}
      </div>
    </FormikContainer>
  );
}

export default SetCoursesForm;
