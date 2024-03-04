import {IModule} from '@/core/models/module';
import './Marquee.scss';

const Marquee = (props: IModule) => {
  const {section} = props;

  return (
    <div className="marquee">
      {[1, 2, 3, 4, 5].map((i) => (
        <div className="marquee-text fs-32" key={i}>
          {section.data?.title}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
