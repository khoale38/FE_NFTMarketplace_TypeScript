import React from "react";
import { useState } from "react";
import "../../styles/pages/Home/category.scss";
const PersonalCategory = () => {
  const links = ["Collected"];
  const [active, setActive] = useState<String | null>("Collected");
  return (
    <div className="px-5">
      <div className="d-flex flex-row text-nowrap overflow-auto border-bottom border-3 border-color">
        {links.map((link) => (
          <li className="nav-item zeroPadding">
            <div
              className={`  ${
                active == link
                  ? "picked-colortext border-bottom border-3  border-dark"
                  : "normal-colortext"
              } nav-link  tab-bar `}
              onClick={() => setActive(link)}
            >
              {link}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PersonalCategory;
