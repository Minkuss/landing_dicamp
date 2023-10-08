import { FC } from "react";
import fingers from "../../assets/ThirdMission.png";
import bag from "../../assets/bag.png";
import chart from "../../assets/chart.png";
import money from "../../assets/money.png";
import { Card, Popover } from "@blueprintjs/core";
import "./ThirdMission.scss";

export const ThirdMission: FC = () => {
  return (
    <div className="thirdMission">
      <div className="thirdMission_text">
        <h2 className="thirdMission_text_h2">
          Реализация{" "}
          <span className="thirdMission_text_h2_signed">«третьей миссии»</span>{" "}
          университетов
        </h2>
        <div>
          <Popover
            content={
              <Card className="dicamp-thirdMission_ul_popover">
                <p>
                  Главная цель третьей миссии — интеграция университетов в
                  региональные и местные программы развития, передача знаний и
                  технологий, а также развитие инноваций, предпринимательской
                  культуры и человеческого капитала.
                </p>
              </Card>
            }
            placement="bottom"
          >
            <a className="dicamp-thirdMission_ul_a">
              Что такое «третья миссия»
            </a>
          </Popover>
        </div>
      </div>
      <img className="thirdMission_img" src={fingers} />
      <ul className="thirdMission_ul">
        <li className="thirdMission_ul_li">
          <img src={chart} />
          <span>
            <span>ВУЗы</span> повышают свои KPI
          </span>
        </li>
        <li className="thirdMission_ul_li">
          <img src={money} />
          <span>
            <span>Студенты</span> получают призы за активность, видят анонсы
            мероприятий вуза и могут найти работу
          </span>
        </li>
        <li className="thirdMission_ul_li">
          <img src={bag} />
          <span>
            <span>Бизнес</span> может продвигать свои услуги на аудиторию
            студентов или найти сотрудников
          </span>
        </li>
      </ul>
    </div>
  );
};
