import $appStore from "@/core/store/app/store";

import { useUnit } from "effector-react";

import "./FooterAbout.scss";

export const FooterHelp = () => {
  const appStore = useUnit($appStore);

  return (
    <>
      <div>
        {appStore.footerHelp?.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </>
  );
};
