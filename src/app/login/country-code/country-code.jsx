import React , { useState } from "react";
import "./country-code.css";

const CountryCode = () => {
  const [showMenu, setShowMenu] = useState(false);

  const countryCodes = ["+1", "+44", "+98", "+91"];

  return (
    <div className="country-selector-wrapper">
      <button onClick={() => setShowMenu(true)} className="country-button">
        +98
      </button>

      {showMenu && (
        <>
          {/* بک‌گراند تار */}
          <div className="overlay" onClick={() => setShowMenu(false)}></div>

          {/* منوی پاپ‌آپ */}
          <div className="popup-menu">
            {countryCodes.map((code) => (
              <div
                key={code}
                onClick={() => {
                  // انتخاب کد کشور
                  setShowMenu(false);
                }}
                className="popup-item"
              >
                {code}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryCode;
