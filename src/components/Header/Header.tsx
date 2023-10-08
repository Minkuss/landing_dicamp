import { FC } from "react";
import logo from "../../assets/Logo.png";
import present1 from "../../assets/present1.png";
import owl from "../../assets/owl.png";
import google from "../../assets/google_play.png";
import apple from "../../assets/app_store.png";
import qr_code from "../../assets/QR.png";
import present2 from "../../assets/present2.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

interface IHeader {
  pageName?: string;
}

export const Header: FC<IHeader> = (props) => {
  const pageName = props.pageName;

  return (
    <header className="dicamp-header">
      <nav className="dicamp-header_nav">
        <ul className="dicamp-header_nav_ul">
          <div className="dicamp-header_nav_ul_logo-cluster">
            <li>
              <img
                className="dicamp-header_nav_ul_img"
                src={logo}
                alt="Цифровой кампус логотип"
              />
            </li>
            <li>
              <span className="dicamp-header_nav_ul_span">
                Цифровой <br></br> кампус
              </span>
            </li>
          </div>
          <div className="dicamp-header_nav_ul_links">
            <li>
              <NavLink to={"/"} className="dicamp-header_nav_ul_link">
                {({ isActive }) => (
                  <span style={isActive ? { color: "#EAD61E" } : {}}>
                    Студентам
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/business"} className="dicamp-header_nav_ul_link">
                {({ isActive }) => (
                  <span style={isActive ? { color: "#EAD61E" } : {}}>
                    Бизнес-партнёрам
                  </span>
                )}
              </NavLink>
            </li>
          </div>
          {pageName === "business" ? (
            <button className="business_button" type="button">
              Подать заявку
            </button>
          ) : (
            <div></div>
          )}
        </ul>
      </nav>
      <div className="prices-info">
        <span className="prices-info_span">Получай призы за активность</span>
        <img className="prices-info_img" src={present1} alt="" />
      </div>
      <img className="dicamp-header_img" src={owl} alt="Сова" />
      <div className="conteiner-for-info">
        <div className="dicamp-header_stores-info">
          <div className="stores-info_conteiner">
            <p className="dicamp-header_stores-info_p-info">
              Цифровой кампус - это платформа для студентов, вузов, власти и
              бизнеса
            </p>
            <p className="dicamp-header_stores-info_p-download">
              Скачивай приложение в сторах:
            </p>
            <div className="dicamp-header_stores-info_mob-icons">
              <a href="https://play.google.com/store/apps/details?id=ru.dicamp">
                <img
                  className="dicamp-header_stores-info_mob-icons_google"
                  src={google}
                  alt="Google Play"
                />
              </a>
              <img className="dicamp-header_present2" src={present2} />
              <a href="https://apps.apple.com/ru/app/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BA%D0%B0%D0%BC%D0%BF%D1%83%D1%81/id6450881977">
                <img
                  className="dicamp-header_stores-info_mob-icons_apple"
                  src={apple}
                  alt="App Store"
                />
              </a>
            </div>
          </div>
          <img
            className="dicamp-header_stores-info_qr"
            src={qr_code}
            alt="QR код"
          />
        </div>
      </div>
    </header>
  );
}