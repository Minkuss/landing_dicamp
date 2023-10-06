import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ThirdMission } from "../../components/ThirdMission/ThirdMission";
import { Business } from "../../components/Business/Business";
import { SendRequest } from "../../components/SendRequest/SendRequest";

export const BusinessPage: FC = () => {
  return (
    <div>
      <Header pageName={"business"} />
      <ThirdMission />
      <Business />
      <div
        style={{
          height: "800px",
        }}
      ></div>
      <SendRequest />
    </div>
  );
};
