import { FC } from "react";
import fingers from "../../assets/ThirdMission.png";
import bag from "../../assets/bag.png";
import chart from "../../assets/chart.png";
import money from "../../assets/money.png";
import "./ThirdMission.scss";

export const ThirdMission: FC = () => {
    return (
        <div className="dicamp-thirdMission">
            <ul className="dicamp-thirdMission_ul1">
                <li>
                    <span className="dicamp-thirdMission_ul_span1">РЕАЛИЗАЦИЯ <br/> 
                    <span className="dicamp-thirdMission_ul_span2">"ТРЕТЬЕЙ МИССИИ"</span> <br/>
                     УНИВЕРСИТЕТОВ</span>
                </li>
                <li>
                    <a 
                        href="https://google.com" 
                        className="dicamp-thirdMission_ul_a">
                        Что такое "третья миссия"
                    </a>
                </li>
            </ul>
            <img 
                    className="dicamp-thirdMission_img" 
                    src={fingers}
                />
            <ul className="dicamp-thirdMission_ul">
                <li>
                    <div className="dicamp-thirdMission_ul_div">
                    <img className="dicamp-thirdMission_ul_img" src={chart} alt="График"/>
                    <span className="dicamp-thirdMission_ul_span">
                        Вузы повышают свой KPI
                    </span>
                    </div>
                </li>
                <li>
                    <div className="dicamp-thirdMission_ul_div">
                    <img className="dicamp-thirdMission_ul_img" src={money} alt="Деньги"/>
                    <span className="dicamp-thirdMission_ul_span">
                        Студенты получают призы за активность, видят анонсы мероприятий вуза и могут найти работу
                    </span>
                    </div>
                </li>
                <li>
                    <div className="dicamp-thirdMission_ul_div">
                    <img className="dicamp-thirdMission_ul_img" src={bag} alt="Портфель"/>
                    <span className="dicamp-thirdMission_ul_span">
                        Бизнес может продвигать свои услуги на аудиторию студентов или найти сотрудников
                    </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
