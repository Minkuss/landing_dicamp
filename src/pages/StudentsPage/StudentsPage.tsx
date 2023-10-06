import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ThirdMission } from "../../components/ThirdMission/ThirdMission";
import { Statistics } from "../../components/Statistics/Statistics";

export const StudentsPage: FC = () => {
  return (
    <div>
      <Header />
      <ThirdMission />
      <div
        style={{
          height: "1944px",
        }}
      ></div>
      <Statistics />
    </div>
  );
};
