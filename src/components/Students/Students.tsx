import { FC } from "react";
import "./Students.scss";
import student from "../../assets/student.png";
import book from "../../assets/books1.png";
import screens from "../../assets/Screens.png";
import present1 from "../../assets/present_students1.png";
import present2 from "../../assets/present_students2.png";
import screens2 from "../../assets/Screens2.png";
import active1 from "../../assets/student_active.png";
import active2 from "../../assets/student_active2.png";
import screens3 from "../../assets/Screens3.png";
import convert from "../../assets/students_convert.png";
import megaphone from "../../assets/megaphone.png";

export const Students: FC = () => {
  return (
    <div className="students">
      <div className="students_for-students">
        <img
          className="students_for-students_img"
          src={student}
          alt="Русский студент"
        />
        <div className="students_for-students_text">
          <div>
            <h2 className="students_for-students_h2">Студентам</h2>
          </div>
          <p className="students_for-students_p">
            <span>
              Раньше за достижения студенты получали только грамоты, а теперь -
              реальные подарки и призы!
            </span>{" "}
            <span>
              А ещё любой студент может в приложении найти подработку
              параллельно учёбе!
            </span>
          </p>
        </div>
        <img className="students_for-students_img-bg" src={book} />
      </div>
      <div className="students-prices">
        <div className="students-prices_text">
          <div>
            <h2 className="students-prices_h2">
              Получи{" "}
              <span className="students-prices_h2_signed">бесплатные</span>{" "}
              призы от вуза и партнёров
            </h2>
          </div>
          <p className="students-prices_p">
            <span>
              Получи ноутбук, сертификаты, абонементы в бассейн, билеты на
              хоккей и многое другое!
            </span>
          </p>
        </div>
        <img className="students-prices_screens" src={screens} alt="Купоны" />
        <img className="students-prices_bg1" src={present1} />
        <img className="students-prices_bg2" src={present2} />
      </div>
      <div className="students-active">
        <img className="students-active_screens" src={screens2} alt="Баллы" />
        <div className="students-active_text">
          <h2 className="students-active_h2">
            Как? Просто будь{" "}
            <span className="students-active_h2_signed">активным!</span>
          </h2>
          <p className="students-active_p">
            <span>
              Копи баллы за достижения по направлениям, которые тебе интересны,
              и обменивай их на подарки
            </span>
          </p>
        </div>
        <img className="students-active_bg1" src={active1} />
        <img className="students-active_bg2" src={active2} />
      </div>
      <div className="students-follow">
        <div className="students-follow_text">
          <h2 className="students-follow_h2">
            Будь <span className="students-follow_h2_signed">в курсе!</span>
          </h2>
          <p className="students-follow_p">
            <span>
              Вакансии для студентов, стажировки в топовых компаниях, новости
              вуза ждут тебя в приложении
            </span>
          </p>
          <img className="students-follow_bg2" src={megaphone} />
        </div>
        <img className="students-follow_screens" src={screens3} alt="Новости" />
        <img className="students-follow_bg1" src={convert} />
      </div>
    </div>
  );
};
