import { Link } from 'react-router-dom';


export const NotFoundPage = () => (
  <div>
    <h1 >
      <span>404</span> not found
    </h1>
    <Link to="/" >
      На главную
    </Link>
  </div>
);
