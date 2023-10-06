import { FC } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="dicamp-header">
      <nav className="dicamp-header_nav">
        <ul className="dicamp-header_nav_ul">
          <li>
            <img
              className="dicamp-header_nav_ul_img"
              src={logo}
              alt="Цифровой кампус логотип"
            />
          </li>
          <li>
            <span className="dicamp-header_nav_ul_span">Цифровой кампус</span>
          </li>
          <li>
            <Link to={"/"} className="dicamp-header_nav_ul_link">
              Студентам
            </Link>
          </li>
          <li>
            <Link to={"/business"} className="dicamp-header_nav_ul_link">
              Бизнес-партнёрам
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
