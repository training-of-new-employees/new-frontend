import { coursesForPosition } from '../../utils/axios/Admin/positions/coursesForPosition';

export default function Main() {
  coursesForPosition('14').then((res) => {
    console.log(res);
  });

  return <div>Main</div>;
}
