import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.min.js";
import "github-calendar/dist/github-calendar-responsive.css";
import "./ContribGraph.css";

const ContribGraph = ({ user }) => {
  useEffect(() => {
    GitHubCalendar(".calendar", user, { responsive: true });
  });

  return <div className="calendar"></div>;
};
export default ContribGraph;
