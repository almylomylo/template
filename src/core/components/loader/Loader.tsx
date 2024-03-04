import './Loader.scss';

interface ILoader {
  isComponentLoader?: boolean;
}

export function Loader(props: ILoader) {
  const {isComponentLoader} = props;
  return (
    <div className={`loader-container ${isComponentLoader ? 'componentLoader' : ''}`}>
      <div className="loader">Loading...</div>
    </div>
  );
}
