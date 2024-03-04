import Image from '@/core/components/image/Image';
import {IModule} from '@/core/models/module';
import {SectionType} from '@/features/home/models/homeModel';
import {Link} from 'react-router-dom';
import './ContentGrid.scss';

const ContentGrid = (props: IModule) => {
  const {section} = props;

  return (
    <div className="contentGrid">
      <div className="contentGrid-list">
        {section.data &&
          section.data?.content &&
          section.data.content?.map((item: SectionType, index: number) => (
            <>
              {item.data && item.data.cta && item.data.cta.url && (
                <Link to={item.data?.cta?.url} className="contentGrid-list-item" key={index}>
                  <div className="contentGrid-list-item-title">{item.data?.subtitle}</div>
                  {item.data && item.data.subtitle && item.data.image && (
                    <div className="contentGrid-list-item-image">
                      <Image src={item.data?.image} alt={item.data?.subtitle} />
                    </div>
                  )}
                </Link>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default ContentGrid;
