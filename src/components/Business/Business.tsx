import { FC } from "react";
import  checkbox  from "../../assets/check_box.png";
import  partners  from "../../assets/partners.png";
import bag_bg from "../../assets/bag-bg.png";
import eye from "../../assets/eye.png";
import spy from "../../assets/spy.png";
import contract from "../../assets/contract.png";
import heart from "../../assets/heart.png";
import intersection from "../../assets/intersection.png";
import list from "../../assets/list.png";
import lightning_bg from "../../assets/lightning_bg.png";
import chart_bg from "../../assets/chart_bg.png";
import event_feed from "../../assets/event_feed.png";
import "./Business.scss";

export const Business: FC = () => {
  return (
  <div className="business">
    <div className="business_for-business">
      <div className="business_for-business_text">
        <ul className="business_for-business_text_ul">
          <li className="business_for-business_text_ul_li"><span>БИЗНЕС-</span></li>
          <li className="business_for-business_text_ul_li"><span>ПАРТНЁРАМ</span></li>
        </ul>
        <img className="buisiness_for-business_img-bg" src={bag_bg} />
        <ul className="business_for-business_ul">
          <li className="business_for-business_ul_li">
            <img 
              className="business_for-business_ul_img" 
              src={checkbox} 
              alt="Галочка"
            /> 
            <span>
              База студентов для рекламы
            </span>
          </li>
          <li className="business_for-business_ul_li">
            <img 
              className="business_for-business_ul_img"
              src={checkbox}
              alt="Галочка" />
            <span className="buisness_for-business_ul_span">
              Быстрые способ найти сотрудников среди студентов
            </span>
          </li>
          <li className="business_for-business_ul_li">
          <img 
              className="business_for-business_ul_img"
              src={checkbox}
              alt="Галочка" />
            <span className="buisness_for-business_ul_span">
              Биржа труда для поиска линейного почасового персонала
            </span>
          </li>
        </ul>
      </div>
      <div className="business_for-business_img">
        <img 
            src={partners}
            alt="Партнёры пожимают руки" 
          />
      </div>
    </div>
    {/************************************************************************/}
    <div className="bussiness_suggest">
      <div>
        <span className="bussiness_suggest_span">МЫ ПРЕДЛАГАЕМ</span>
        <img className="bussiness_suggest_img-bg1" src={lightning_bg} />
        <img className="bussiness_suggest_img-bg2" src={chart_bg} />
      </div>
      <div className="bussiness_suggest_columns">
        <div className="bussiness_suggest_first-column">
          <ul className="bussiness_suggest_column_ul">
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={eye}
              />
              <span className="bussiness_suggest_column_span">
                Повысить продажи в сегменте молодёжи через рекламу, 
                которую увидят около <span>15 000 студентов</span> г. Хабаровск
              </span>
            </li>
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={intersection}
              />
              <span className="bussiness_suggest_column_span">
                Доступ к базе студентов, сегментированной по интересам, 
                для <span>адресных рассылок</span> Вашей целевой аудитории
              </span>
            </li>
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={contract}
              />
              <span className="bussiness_suggest_column_span">
                Возможность нанять молодых специалистов через <span>размещение вакансий</span> на платформе и
                поощрение трудоустройства студентов к Вам в компанию
              </span>
            </li>
          </ul>
        </div>
        <div className="bussiness_suggest_secnd-column">
          <ul className="bussiness_suggest_column_ul">
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={heart}
              />
              <span className="bussiness_suggest_column_span">
                Простой способ получить <span>волну позитивных отзывов</span> о ваших продуктах в соцсетях, 
                посещение мероприятий Вашего бренда через платформу
              </span>
            </li>
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={spy}
              />
              <span className="bussiness_suggest_column_span">
                Возможность использовать студентов, как <span>волонтёров для Вашего бизнеса</span>, 
                через платформу (например, для оценки вашего сервиса «Тайный покупатель», 
                волонтёрства на Ваших мероприятиях и акциях)
              </span>
            </li>
            <li className="bussiness_suggest_column_ul_li">
              <img 
                className="bussiness_suggest_column_img" 
                src={list}
              />
              <span className="bussiness_suggest_column_span">
                Возможность <span>публиковать опросы</span> целевой аудитории на платформе
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/************************************************************************/}

    <div className="bussiness_event-feed"> 
      <ul className="bussiness_event-feed_ul">
        <li>
          <img className="bussiness_event-feed_img" 
            src={event_feed} 
            alt="Лента событий" />
        </li>
        <li>
          <span className="bussiness_event_span">
            Вот так выглядят посты в приложении
          </span>
        </li>
      </ul>
    </div>
  </div>
  )
};
