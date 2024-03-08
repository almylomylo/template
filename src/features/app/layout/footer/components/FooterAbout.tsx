import $appStore from "@/core/store/app/store";

import { useUnit } from "effector-react";

import "./FooterAbout.scss";

export const FooterAbout = () => {
  const appStore = useUnit($appStore);

  return (
    <>
      <div>
        {appStore.footerAbout?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </>
  );
};
