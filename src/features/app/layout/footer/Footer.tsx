import $appStore from "@/core/store/app/store";

import { useUnit } from "effector-react";

import "./Footer.scss";
import { FooterAbout } from "./components/FooterAbout";
import { FooterHelp } from "./components/FooterHelp";

export const Footer = () => {
  const appStore = useUnit($appStore);

  return (
    <>
      <FooterAbout />
      <FooterHelp />
    </>
  );
};
