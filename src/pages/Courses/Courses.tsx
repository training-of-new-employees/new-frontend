import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import Button from '../../components/UI/Button/Button';

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
        <div className="pt-[20px]">
          <CardGrid mode="course" />
        </div>
      </div>
    </>
  );
}
