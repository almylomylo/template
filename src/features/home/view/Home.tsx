import {HomeViewModel} from '@/features/home/viewmodel/homeViewModel';
import {SectionType} from '../models/homeModel';
import {Suspense} from 'react';
import {Loader} from '@/core/components/loader/Loader';

const HomeView = () => {
  const {homeData, isLoading, getModule} = HomeViewModel();
  return (
    <div className="home">
      {isLoading && <>Loading...</>}
      {homeData != null && homeData.sections && homeData.sections!.length > 0 && (
        <>
          {homeData.sections.map((section: SectionType, index: number) => (
            <Suspense fallback={<Loader isComponentLoader />} key={index}>
              {getModule(section.type!, section)}
            </Suspense>
          ))}
        </>
      )}
    </div>
  );
};

export default HomeView;
