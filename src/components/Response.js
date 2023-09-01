import React, { useState } from "react";
import { Input, Button } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import myLogo from "./Black_And_White_Rakia_Design_Studio_Logo-removebg-preview.png";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./Response.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);

// todo:function
function Response() {
  const [isSidebarOpen, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!isSidebarOpen);
  };

  return (
    <>
      <div className="container1">
        <div className="header">
          <div className="logoHead">
            <button onClick={hamburgerMenu}>
              <MenuOutlined style={{ fontSize: "25px", marginRight: "15px" }} />
            </button>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </div>
          <div className="linksHead">
            <img src={myLogo} alt="logo" style={{ width: "50%" }} />
          </div>
          <div className="buttonHead">
            <UserOutlined className="iconUser" />
            <Button style={{ marginRight: "10px" }}>logout</Button>
            
          </div>
        </div>
        {/* todo: part two */}
        <div className="partTwo">
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <Sidebar />
          </div>


          
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default Response;
