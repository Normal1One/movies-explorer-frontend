import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <p className="notFound__title">404</p>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="notFound__link">Назад</button>
    </div>
  )
}

export default NotFound;
