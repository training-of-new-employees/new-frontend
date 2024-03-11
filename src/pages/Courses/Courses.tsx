import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import Button from '../../components/UI/Button/Button';

export default function Courses() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-[20px] px-[20px] w-[100%]">
        <div className="max-w-[260px]">
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
