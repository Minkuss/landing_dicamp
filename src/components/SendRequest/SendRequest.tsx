import { FC } from "react";
import "./SendRequest.scss";
import convert from "../../assets/convert.png";

export const SendRequest: FC = () => {
  return (
    <div className="sending-req">
      <div className="sending-req_info">
        <p className="sending-req_info_p">
          <div className="sending-req_info_p_span1">Подайте </div>
          <div className="sending-req_info_p_span2">заявку</div>
          <div>и с вами свяжутся!</div>
        </p>
        <p className="sending-req_info_p2">
          Разместите ваши промо-материалы, вакансии, опросы на постоянно
          растущую аудиторию студентов
        </p>
        <img className="sending-req_info_img" src={convert} alt="Конверт" />
      </div>
      <div className="sending-req_form">
        <fieldset className="sending-req_form_field">
          <legend>ФИО</legend>
          <input className="sending-req_form_field_inp" type="text" />
        </fieldset>
        <fieldset className="sending-req_form_field">
          <legend>Email</legend>
          <input className="sending-req_form_field_inp" type="text" />
        </fieldset>
        <input
          placeholder="Компания"
          className="sending-req_form_inp"
          type="text"
        />
        <textarea className="sending-req_form_text"></textarea>
        <input
          className="sending-req_form_check"
          type="checkbox"
          name=""
          id=""
        />
        <input
          className="sending-req_form_check"
          type="checkbox"
          name=""
          id=""
        />
        <button>Отправить заявку</button>
      </div>
    </div>
  );
};
