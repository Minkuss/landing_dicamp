import { FC, useEffect, useState } from "react";
import "./Statistics.scss";
import cup from "../../assets/cup1.png";
import people from "../../assets/people.png";
import active from "../../assets/active.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import axios from "axios";
import { apiDvgups, apiTogu, apiAnother } from "../../../config";

export const Statistics: FC = () => {
  const [info, setInfo] = useState<
    {
      name: string;
      users: number;
      goals: number;
      events: number;
      spending: number;
    }[]
  >([]);

  useEffect(() => {
    axios.all(apiDvgups.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(
        (
          { data: users },
          { data: goals },
          { data: events },
          { data: spending }
        ) => {
          setInfo([
            ...info,
            {
              name: "ДВГУПС",
              users: users[0].value,
              goals: goals[0].value,
              events: events[0].value,
              spending: spending[0].value,
            },
          ]);
        }
      )
    );
    axios.all(apiTogu.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(
        (
          { data: users },
          { data: goals },
          { data: events },
          { data: spending }
        ) => {
          setInfo([
            ...info,
            {
              name: "ТОГУ",
              users: users[0].value,
              goals: goals[0].value,
              events: events[0].value,
              spending: spending[0].value,
            },
          ]);
        }
      )
    );
    axios.all(apiAnother.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(
        (
          { data: users },
          { data: goals },
          { data: events },
          { data: spending }
        ) => {
          setInfo([
            ...info,
            {
              name: "Другой ВУЗ",
              users: users[0].value,
              goals: goals[0].value,
              events: events[0].value,
              spending: spending[0].value,
            },
          ]);
        }
      )
    );
    console.log(info);
  }, []);

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
          <td>{info[0]?.users}</td>
          <td>text2</td>
        </tr>
      </table>
    </div>
  );
};
