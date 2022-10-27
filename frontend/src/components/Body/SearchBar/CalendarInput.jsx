import React, { useContext, useEffect, useState } from "react";
import "./CalendarInputStyle.scss";
import { BsCalendar4Event } from "react-icons/bs";
import { Calendar, DateObject } from "react-multi-date-picker";

const CalendarInput = (props) => {
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState([new DateObject()]);
  return (
    <div>
      <div class="CalendarInputBox" onClick={() => setToggle(!toggle)}>
        <div className="CalendarInputBox__iconContainer">
          <BsCalendar4Event className="CalendarInputBox__iconContainer-icon" />
        </div>
        <p> Chek In - Check out </p>
      </div>
      <div
        class={
          toggle ? "optionsContainer animation" : "optionsContainer enlace"
        }
      >
        <h1>
          <Calendar
            value={values}
            onChange={setValues}
            range
            //rangeHover
            numberOfMonths={2}
            disableMonthPicker
            disableYearPicker
          />
        </h1>
      </div>
    </div>
  );
};
export default CalendarInput;
