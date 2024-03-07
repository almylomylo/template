import {IModule} from '@/core/models/module';
import './BannerText.scss';

const BannerText = (props: IModule) => {
  const {section} = props;
  const data = section.data;
  return (
    <>
      {/* <pre>{JSON.stringify(section, null, 2)}</pre> */}
      <div className="bannerText">
        <div className="container">
          <div className="bannerText-header">
            <div className="fs-78">{data?.subtitle}</div>
            <div className="fs-16">{data?.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerText;
