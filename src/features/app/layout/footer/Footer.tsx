import "./Footer.scss";
import { FooterAbout } from "./components/FooterAbout";
import { FooterHelp } from "./components/FooterHelp";

export const Footer = () => {
  return (
    <div className="footer ">
      <div className="footerAbout">
        <FooterAbout />
      </div>
      <div className="footerHelp">
        <FooterHelp />
      </div>
    </div>
  );
};
