import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import home from "../home.png";
import { MenuItem } from "@mui/material";

export default function PageNavigation({
  buttons,
  dropDownNav,
  setDropDownNav,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const copy = [...buttons];
  const people = copy?.find((type) => {
    if (type.button_label === "People") {
      return type.button_image;
    }
  });
  const actions = copy?.find((type) => {
    if (type.button_label === "Actions") {
      return type.button_image;
    }
  });
  const chat = copy?.find((type) => {
    if (type.button_label === "Chat") {
      return type.button_image;
    }
  });
  const questions = copy?.find((type) => {
    if (type.button_label === "Questions") {
      return type.button_image;
    }
  });
  const things = copy?.find((type) => {
    if (type.button_label === "Things") {
      return type.button_image;
    }
  });
  const timedate = copy?.find((type) => {
    if (type.button_label === "Time/Date") {
      return type.button_image;
    }
  });

  const handleNav = () => {
    setDropDownNav(!dropDownNav);
  };

  return (
    <div>
      <div onClick={handleNav}>
        {location.pathname === "/home" && (
          <img src={home} alt="home" width="75px" height="75px" />
        )}
        {location.pathname === "/people" && (
          <img
            src={people.button_image}
            alt="people"
            width="75px"
            height="75px"
          />
        )}
      </div>
      {dropDownNav && (
        <div>
          <MenuItem onClick={() => navigate("/home")}> <img src={home} width="75px" /></MenuItem>{" "}
          <MenuItem onClick={() => navigate("/people")}>
            <img src={people?.button_image} width="75px" />
          </MenuItem>{" "}
          <MenuItem onClick={() => navigate("/questions")}> <img src={questions?.button_image} width="75px" /></MenuItem>{" "}
          <MenuItem onClick={() => navigate("/actions")}> <img src={actions?.button_image} width="75px" /></MenuItem>{" "}
          <MenuItem onClick={() => navigate("/things")}> <img src={things?.button_image} width="75px" /></MenuItem>{" "}
          <MenuItem onClick={() => navigate("/chat")}> <img src={chat?.button_image} width="75px" /></MenuItem>{" "}
          <MenuItem onClick={() => navigate("/timedate")}> <img src={timedate?.button_image} width="75px" /></MenuItem>
        </div>
      )}
    </div>
  );
}
