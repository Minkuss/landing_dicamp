import { FC } from "react";
import { Header } from "../../components/Header/Header";
import { ThirdMission } from "../../components/ThirdMission/ThirdMission";
import { Statistics } from "../../components/Statistics/Statistics";
import { Footer } from "../../components/Footer/Footer";
import { Students } from "../../components/Students/Students";

export const StudentsPage: FC = () => {
  return (
    <div>
      <Header />
      <ThirdMission />
      {/* <div style={{ height: "1956px" }}></div> */}
      <Students />
      <Statistics />
      <Footer />
    </div>
  );
};
