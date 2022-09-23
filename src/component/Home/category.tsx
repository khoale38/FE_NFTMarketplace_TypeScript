import React from "react";
import { useState } from "react";
import "../../styles/pages/Home/category.scss"
const Category = () => {
  const links = ["1", "2", "3"];
  const [active, setActive] = useState<String | null>("1");
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li className="nav-item">
            <a
              href={`#${link}`}
              className={`nav-link ${active == link && "colortext"}`}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
