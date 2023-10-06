import React from "react";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentsPage } from "./src/pages/StudentsPage/StudentsPage";
import { BusinessPage } from "./src/pages/BusinessPage/BusinessPage";

export const CoreRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsPage />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
};
