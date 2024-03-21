// import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import positionStore from '../../../store/position-store.tsx';
import { AddNewPositionSchema } from '../../../utils/validationSchema/ValidAddNewPosition.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

const AddNewPositionForm = observer(() => {
  // const [serverError, setServerError] = useState('sample of server error');
  const { addNewPosition } = positionStore;
  const InitialValues = {
    positionNew: '',
  };

  const onSubmit = (values: object) => {
    addNewPosition({
      name: values.positionNew,
      id: Math.floor(Math.random() * 101),
      courses: 0,
      personal: 0,
    });
    console.log('Form data', values);
  };
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddNewPositionSchema}
      onSubmit={onSubmit}
      formName="addRole"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="positionNew"
        label="Название должности"
        placeholder="Введите название должности"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
});

export default AddNewPositionForm;
