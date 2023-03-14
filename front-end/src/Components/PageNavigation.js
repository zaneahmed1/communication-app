import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import home from "../home.png";
import { MenuItem } from "@mui/material";
import "../Components/PageNavigation.scss"

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
    <div className="text">
    You are here: 
    </div>
      <div onClick={handleNav} className="dropdownNav">
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
         {location.pathname === "/actions" && (
          <img
            src={actions.button_image}
            alt="actions"
            width="75px"
            height="75px"
          />
        )}
         {location.pathname === "/chat" && (
          <img
            src={chat.button_image}
            alt="chat"
            width="75px"
            height="75px"
          />
        )}
         {location.pathname === "/questions" && (
          <img
            src={questions.button_image}
            alt="questions"
            width="75px"
            height="75px"
          />
        )}
         {location.pathname === "/things" && (
          <img
            src={things.button_image}
            alt="things"
            width="75px"
            height="75px"
          />
        )}
         {location.pathname === "/timedate" && (
          <img
            src={timedate.button_image}
            alt="timedate"
            width="75px"
            height="75px"
          />
        )}
      </div>
      {dropDownNav && (
        <div className="dropdownNav__menu">
          <MenuItem  className="dropdownNav__item" onClick={() => navigate("/home")}> <img src={home} width="60px" /></MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/people")}>
            <img src={people?.button_image} width="60px" />
          </MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/questions")}> <img src={questions?.button_image} width="60px" /></MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/actions")}> <img src={actions?.button_image} width="60px" /></MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/things")}> <img src={things?.button_image} width="60px" /></MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/chat")}> <img src={chat?.button_image} width="60px" /></MenuItem>{" "}
          <MenuItem className="dropdownNav__item" onClick={() => navigate("/timedate")}> <img src={timedate?.button_image} width="60px" /></MenuItem>
        </div>
      )}
    </div>
  );
}
