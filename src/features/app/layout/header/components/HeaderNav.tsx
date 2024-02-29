import $appStore from '@/core/store/app/store';
import {useUnit} from 'effector-react';
import {MenuType, NavItemType} from '@/core/store/app/types';
import './HeaderNav.scss';
import {sanitizeUppercase} from '@/core/utils/stringUtils';

export const HeaderNav = () => {
  const appStore = useUnit($appStore);
  return (
    <nav className="headerNav">
      {appStore.nav !== null &&
        appStore.nav
          .filter((e: MenuType) => e.navType === 'headerNav')[0]
          .children.map((item: NavItemType, i: number) => (
            <div className="navItem" key={i}>
              {sanitizeUppercase(item.navItem)}
            </div>
          ))}
    </nav>
  );
};
