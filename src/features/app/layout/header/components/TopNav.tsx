import './TopNav.scss';

export const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav-inner container fs-14 fc-white cap">
        <nav className="topNav-left">
          <div className="topNav-left-nav-item">Επικοινωνια</div>
          <div className="topNav-left-nav-item">Καταστηματα</div>
        </nav>
        <div className="topNav-center">
          <div className="topNav-marquee">
            - 20% ΕΚΠΤΩΣΗ ΣΕ ΟΛΑ ΤΑ ΒΡΑΧΙΟΛΙΑ ΚΑΙ ΔΑΧΤΥΛΙΔΙΑ, ΕΞΑΙΡΕΙΤΑΙ Η ΝΕΑ ΚΑΙ ΧΡΥΣΗ ΣΥΛΛΟΓΗ ΚΑΙ ΤΑ ΕΙΔΗ LAST
            CHANCE.
          </div>
        </div>
        <nav className="topNav-right">
          <div className="topNav-right-nav-item">LINK</div>
          <div className="topNav-right-nav-item">LANG SWITCHER</div>
        </nav>
      </div>
    </div>
  );
};
