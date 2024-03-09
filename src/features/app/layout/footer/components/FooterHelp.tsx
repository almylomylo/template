import $appStore from "@/core/store/app/store";

import { useUnit } from "effector-react";

import "./FooterHelp.scss";

export const FooterHelp = () => {
  const appStore = useUnit($appStore);

  return (
    <>
      <div className="footer-help">
        <h3>Βοήθεια</h3>
        {appStore.footerHelp?.map((item, index) => {
          return (
            <div className="footer-element" key={index}>
              {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
};
