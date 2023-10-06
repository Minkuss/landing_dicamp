import { FC } from "react";
import "./SendRequest.scss";

export const SendRequest: FC = () => {
  return (
    <div className="sending-req">
      <div className="sending-req_info">
        <p className="sending-req_info_p">
          <span>Подайте </span>
          <span>заявку </span>
          <span>и с вами свяжутся!</span>
        </p>
      </div>
    </div>
  );
};
