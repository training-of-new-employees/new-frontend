import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import { Card } from '../../components/UI/Card/Card';

export default function Courses() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" pl-[20px] pt-[20px] flex flex-col w-full">
        <div className="w-[260px] flex pb-[20px]">
          <Button variant="primary" icon="white" onClick={() => navigate('/courses/new-course')}>
            Новый курс
          </Button>
        </div>

        <Card mode="course" />
      </div>
    </>
  );
}
