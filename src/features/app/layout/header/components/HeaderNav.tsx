import $appStore from '@/core/store/app/store';
import {Link} from 'react-router-dom';
import {useUnit} from 'effector-react';
import {sanitizeUppercase} from '@/core/utils/stringUtils';
import {MainMenuItemType} from '@/features/app/model/appModels';
import {setActiveNav} from '@/core/store/app/events';

import './HeaderNav.scss';
export const HeaderNav = () => {
  const appStore = useUnit($appStore);

  const getNavItem = (item: MainMenuItemType) => {
    if (!item.submenu || item.submenu.length === 0) {
      return (
        <Link to={item.cleanUrl} key={item.entity_id} className="navItem">
          <div className="navItem-title">{sanitizeUppercase(item.title)}</div>
        </Link>
      );
    } else {
      return (
        <div
          key={item.entity_id}
          className="navItem hasChildren"
          onClick={() => {
            if (appStore.activeNav !== null) {
              setActiveNav(null);
              setTimeout(() => {
                setActiveNav(appStore.activeNav === item.entity_id ? null : item.entity_id);
              }, 200);
            } else {
              setActiveNav(item.entity_id);
            }
          }}
        >
          {item.title}
        </div>
      );
    }
  };
  return (
    <nav className="headerNav">
      {appStore.mainMenu !== null && appStore.mainMenu.map((item: MainMenuItemType) => getNavItem(item))}
    </nav>
  );
};
