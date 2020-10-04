import React, { useState } from "react";
import Calendar from "react-calendar";



export default function DashboardCalendar(){
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} className="react-calendar"/>
      {console.log(date)}
      {date.toString()}
    </div>
  );
};