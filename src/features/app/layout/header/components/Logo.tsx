import './Logo.scss';
export const Logo = () => {
  return (
    <div className="logo">
      <svg>
        <use xlinkHref="#logo" />
      </svg>
    </div>
  );
};
