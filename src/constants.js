import React from "react";
import {
  Home,
  Book,
  List,
  Dashboard,
  VideoLibrary,
  Gamepad
} from "@material-ui/icons";

export const SIDENAV_DATA = [
  { text: "Home", IconComponent: <Home /> },
  { text: "Words", IconComponent: <List /> },
  { text: "Topics", IconComponent: <Book /> },
  { text: "Exams", IconComponent: <Dashboard /> },
  { text: "Video Courses", IconComponent: <VideoLibrary /> },
  { text: "Game", IconComponent: <Gamepad /> }
];
