import React from "react";
import { useState } from "react";
import "../../styles/pages/Home/category.scss";
const Category = () => {
  const links = ["Trending", "Sport", "Art", "Music", "Photography"];
  const [active, setActive] = useState<String | null>("1");
  return (
    <div className="px-5">
      <span className="header-text">
        Explore Collection
      </span>
      <div className="d-flex flex-row text-nowrap overflow-auto ">
        {links.map((link) => (
          <li className="nav-item r ">
            <a
              href={`#${link}`}
              className={`nav-link tab-bar ${active == link && "colortext"}`}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Category;
