import { FC } from "react";
import "./Statistics.scss";
import cup from "../../assets/cup1.png";
import people from "../../assets/people.png";
import active from "../../assets/active.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

export const Statistics: FC = () => {
  return (
    <div className="statistics">
      <p className="statistics_p">
        Наши <div className="statistics_p_indicators">показатели</div> и ваши{" "}
        <div className="statistics_p_achievements">достижения</div>
      </p>
      <table className="statistics_table">
        <tr
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <th>
            <img className="statistics_table_img" src={cup} alt="Приз" />
          </th>
          <th>
            <div className="table_label">
              <img
                className="statistics_table_people-icon"
                src={people}
                alt="Люди"
              />
              <span className="statistics_table_people-count">1338</span>
              <span className="statistics_table_people-text">
                пользователей в системе
              </span>
            </div>
          </th>
          <th>
            <div className="table_label">
              <img
                className="statistics_table_people-icon"
                src={active}
                alt="Активные"
              />
              <span className="statistics_table_people-count">1338</span>
              <span className="statistics_table_people-text">
                пользователей в системе
              </span>
            </div>
          </th>
          <th>
            <div className="table_label">
              <img
                className="statistics_table_people-icon"
                src={plus}
                alt="Плюс"
              />
              <span className="statistics_table_people-count">1338</span>
              <span className="statistics_table_people-text">
                пользователей в системе
              </span>
            </div>
          </th>
          <th>
            <div className="table_label">
              <img
                className="statistics_table_people-icon"
                src={minus}
                alt="Минус"
              />
              <span className="statistics_table_people-count">1338</span>
              <span className="statistics_table_people-text">
                пользователей в системе
              </span>
            </div>
          </th>
        </tr>
        <div className="divider"></div>
        <tr>
          <td>text1</td>
          <td>text2</td>
        </tr>
      </table>
    </div>
  );
};
