import {Link} from 'react-router-dom';
import './Logo.scss';
export const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <svg>
          <use xlinkHref="#logo" />
        </svg>
      </div>
    </Link>
  );
};
