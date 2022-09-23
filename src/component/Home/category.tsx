import React from "react";
import { useState } from "react";
import "../../styles/pages/Home/category.scss"
const Category = () => {
  const links = ["1", "2", "3","4","5","6","1", "2", "3","4","5","6"];
  const [active, setActive] = useState<String | null>("1");
  return (
    <div className="d-flex flex-row text-nowrap overflow-auto">
      
        {links.map((link) => (
          <li className="nav-item r mx-5">
            <a
              href={`#${link}`}
              className={`nav-link ${active == link && "colortext"}`}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
    
    </div>
  );
};

export default Category;
