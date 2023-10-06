import { FC } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ThirdMission } from "../../components/ThirdMission/ThirdMission";

export const StudentsPage: FC = () => {
  return (
    <div>
      <Header />
      <ThirdMission />
    </div>
  );
};
