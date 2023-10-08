import { FC } from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="dicamp-footer">
      <ul className="dicamp-footer_ul">
        <li>
          <img src={Logo} alt="Логотоп" className="dicamp-footer_ul_img" />
        </li>
        <li>
          <span className="dicamp-footer_ul_span">Цифровой кампус</span>
        </li>
        <div className="dicamp-footer_ul_div">
          <li>
            <NavLink to={"/"} className="dicamp-footer_ul_link">
              <span>Пользовательское соглашение</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="dicamp-footer_ul_link">
              <span>Политика конфеденциальности</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="dicamp-footer_ul_link">
              <span>Удаление персональных данных</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};
