import $appStore from "@/core/store/app/store";

import { useUnit } from "effector-react";

import "./FooterAbout.scss";

export const FooterAbout = () => {
  const appStore = useUnit($appStore);

  return (
    <>
      <div className="footer-about">
        <h3>Μάθε για την AMM</h3>
        {appStore.footerAbout?.map((item, index) => {
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
