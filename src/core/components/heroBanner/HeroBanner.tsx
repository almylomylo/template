import Image from '@/core/components/image/Image';
import {IModule} from '@/core/models/module';
import './HeroBanner.scss';

const HeroBanner = (props: IModule) => {
  const {section} = props;

  return <div className="heroBanner">{section.data && section.data.image && <Image src={section.data.image} />}</div>;
};
export default HeroBanner;
