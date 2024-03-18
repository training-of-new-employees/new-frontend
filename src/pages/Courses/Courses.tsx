import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { NoCourses } from '../../components/NoContent';
import Button from '../../components/UI/Button/Button';
import authStore from '../../store/auth-store';
import coursesStore from '../../store/courses-store';
import { useStores } from '../../utils/context/root-context-store';

export const Courses = observer(() => {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const navigate = useNavigate();
  const { courses } = useStores((state) => state.coursesState);

  console.log(courses);

  const initAuthMok = authStore;
  const initCourses = coursesStore;

  React.useEffect(() => {
    initCourses.getCoursesAdminAction();
    initAuthMok.loginAction({
      email: 'testtesttest.test.tt.t.e@gmail.com',
      password: '1234gD!a',
    });
  }, []);

  return (
    <>
      <div className="py-[20px] px-[20px] w-[100%] pt-[92px]">
        {isAdmin && courses?.value.length === 0 ? (
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
        {courses?.case({
          pending: () => <div>Loading...</div>,
          rejected: () => <div>Ошибка на сервере...</div>,
          fulfilled: (value) => <CardGrid data={courses?.value} mode="course" />,
        })}
      </div>
    </>
  );
});

export default Courses;
