import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <section className="sidebar">
        <div className="sidebar-icons">
          <img className="logo" src="../logo.png" alt="logo" />

          <img src="../products.png" alt="icon" className="products" />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
