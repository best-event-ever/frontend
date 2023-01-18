import React from "react";
import headerImg from "../img/header_event_app.jpg";

export function Header() {
  return (
    <div className="h-20">
      <img src={headerImg} alt="" className="w-50 h-20" />
    </div>
  );
}
