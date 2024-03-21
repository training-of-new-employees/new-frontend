import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { NoCourses } from '../../components/NoContent';
import Button from '../../components/UI/Button/Button';
import { COURSE_DATA } from '../../utils/constants';

export default function Courses() {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const navigate = useNavigate();
  return (
    <>
      <div className="py-[20px] px-[20px] w-[100%] pt-[92px] min-h-screen ml-[300px]">
        {isAdmin && COURSE_DATA.length === 0 ? (
          <NoCourses />
        ) : isAdmin ? (
          <div className="max-w-[260px] mb-[20px]">
            <Button variant="primary" icon="white" onClick={() => navigate('/new-course')}>
              Новый курс
            </Button>
          </div>
        ) : (
          ''
        )}
        <CardGrid data={COURSE_DATA} mode="course" />
      </div>
    </>
  );
}
