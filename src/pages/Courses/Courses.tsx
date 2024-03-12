import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import Button from '../../components/UI/Button/Button';

export default function Courses() {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const navigate = useNavigate();
  return (
    <>
      <div className="py-[20px] px-[20px] w-[100%]">
        {isAdmin ? (
          <div className="max-w-[260px]">
            <Button variant="primary" icon="white" onClick={() => navigate('/courses/new-course')}>
              Новый курс
            </Button>
          </div>
        ) : (
          ''
        )}
        <CardGrid mode="course" />
      </div>
    </>
  );
}
