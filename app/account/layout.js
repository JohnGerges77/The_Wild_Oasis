"use client";
import React, { useState } from "react";
import SideNavigation from "../_components/SideNavigation";

function accountLayout({ children }) {


  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <div className="absolute sm:relative ">
        <SideNavigation />
      </div>
      <div>
      
      
        {children}
      </div>
    </div>
  );
}

export default accountLayout;
