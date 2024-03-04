import {useState} from 'react';

import './Image.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

// eslint-disable-next-line react-refresh/only-export-components
export default ({...props}: ImageProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="image">
      <img {...props} onLoad={() => setLoading(false)} className={!loading ? 'isVisible' : ''} />
      <div className="image-loaderContainer">
        {loading && (
          <div
            className="image-loader"
            style={{
              display: loading ? 'block' : 'none',
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
