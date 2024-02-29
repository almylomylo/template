import './HeaderIcons.scss';

export const HeaderIcons = () => {
  return (
    <div className="headerIcons">
      <div className="headerIcons-item iconMagnifier">
        <svg>
          <use xlinkHref="#icon-magnifier" />
        </svg>
      </div>
      <div className="headerIcons-item iconUser">
        <svg>
          <use xlinkHref="#icon-user" />
        </svg>
      </div>
      <div className="headerIcons-item iconHeart">
        <svg>
          <use xlinkHref="#icon-heart" />
        </svg>
      </div>
      <div className="headerIcons-item iconCart">
        <svg>
          <use xlinkHref="#icon-cart" />
        </svg>
        <div className="iconCart-numItems fs-12">4</div>
      </div>
    </div>
  );
};
