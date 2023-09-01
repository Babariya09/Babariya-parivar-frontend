import React from "react";
import "./Sidebar.css";
import {
  HomeOutlined,
  FormOutlined,
  EditOutlined,
  SnippetsOutlined,
  DiffOutlined,
  BookOutlined,
  KeyOutlined,
  IdcardOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import { Link } from "react-router-dom";

const content1 = (
  <div>
    <div style={{ display: "block" }}>
      <Link
        to="/main-member"
        className="px-2 py-1"
        style={{ display: "block" }}
      >
        Main Member Entry
      </Link>
    </div>
    <div style={{ display: "block" }}>
      <Link to="/sub-member" className="px-2 py-1" style={{ display: "block" }}>
        Sub Member Entry
      </Link>
    </div>
    <div style={{ display: "block" }}>
      <Link
        to="/student-result"
        className="px-2 py-1"
        style={{ display: "block" }}
      >
        Student Result Entry
      </Link>
    </div>
  </div>
);

const content2 = (
  <div>
    <Link to="/AddTaluka" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Taluka</div>
    </Link>
    <Link to="/AddDistrict" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit District</div>
    </Link>
    <Link to="/AddVillage" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Village</div>
    </Link>
    <Link to="/AddOccup" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Occupation</div>
    </Link>
    <Link to="/Education" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Education</div>
    </Link>
    <Link to="/AddRelation" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Relation</div>
    </Link>
    <Link to="/AddGroup" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add/Edit Group</div>
    </Link>
    <Link to="/AddComm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Add Committee</div>
    </Link>
    <Link to="/Removecomm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Remove Committee</div>
    </Link>
  </div>
);
<br />;
const content3 = (
  <div>
    <Link to="/CommMember" className="px-2 py-1" style={{ display: "block" }}>
      <div>Committee Member</div>
    </Link>
    <Link to="/MemberList" className="px-2 py-1" style={{ display: "block" }}>
      <div>Member list</div>
    </Link>
    <Link
      to="/DeletedMember"
      className="px-2 py-1"
      style={{ display: "block" }}
    >
      <div>Deleted Member List</div>
    </Link>
    <Link to="/Donation" className="px-2 py-1" style={{ display: "block" }}>
      <div>Donation register</div>
    </Link>
    <Link to="/Notebook/" className="px-2 py-1" style={{ display: "block" }}>
      <div>Notebook donation</div>
    </Link>
    <Link
      to="/LifitimeRegister"
      className="px-2 py-1"
      style={{ display: "block" }}
    >
      <div>Lifetime register</div>
    </Link>
    <Link to="/UnpaidReg" className="px-2 py-1" style={{ display: "block" }}>
      <div>Unpaid lifetime register</div>
    </Link>
    <Link to="/Ranker" className="px-2 py-1" style={{ display: "block" }}>
      <div>Ranker student</div>
    </Link>
    <Link to="/Wilcard" className="px-2 py-1" style={{ display: "block" }}>
      <div>Wildcard Searching</div>
    </Link>
  </div>
);

const utility = (
  <div>
    <Link to="/DeleteMem" className="px-2 py-1" style={{ display: "block" }}>
      <div>Delete Member</div>
    </Link>
    <Link to="/RetainMem" className="px-2 py-1" style={{ display: "block" }}>
      <div>Retain Member</div>
    </Link>
  </div>
);

const receiptprint = (
  <div>
    <Link to="/LifetimeFree" className="px-2 py-1" style={{ display: "block" }}>
      <div>Lifetime Fee Entry</div>
    </Link>
    <Link to="/LifetimeOnce" className="px-2 py-1" style={{ display: "block" }}>
      <div>Lifetime Fee Entry at once</div>
    </Link>
    <Link
      to="/DonationEntry"
      className="px-2 py-1"
      style={{ display: "block" }}
    >
      <div>Donation Entry</div>
    </Link>
    <Link to="/AllPaid" className="px-2 py-1" style={{ display: "block" }}>
      <div>All paid Receipt</div>
    </Link>
    <Link to="/unpaid" className="px-2 py-1" style={{ display: "block" }}>
      <div>Unpaid Receipt</div>
    </Link>
  </div>
);
const formprinting = (
  <div>
    <Link to="/FilledForm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Filled Form</div>
    </Link>
    <Link to="/BlankForm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Blank Form</div>
    </Link>
  </div>
);

const tokenprinting = (
  <div>
    <Link to="/FilledForm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Filled Form</div>
    </Link>
    <Link to="/BlankForm" className="px-2 py-1" style={{ display: "block" }}>
      <div>Blank Form</div>
    </Link>
  </div>
);
const Admin = (
  <div>
    <Link to="/ChangePass" className="px-2" style={{ display: "block" }}>
      <div>Change Password</div>
    </Link>
    <Link to="/CreateUser" className="px-2" style={{ display: "block" }}>
      <div>Create user</div>
    </Link>
    <Link to="/LockUnlock" className="px-2" style={{ display: "block" }}>
      <div>Lock/unlock system</div>
    </Link>
    <Link to="/SystemUser" className="px-2" style={{ display: "block" }}>
      <div>System user</div>
    </Link>
  </div>
);

const data = (
  <div>
    <Link to="/Export" className="px-2" style={{ display: "block" }}>
      <div>Export Backup</div>
    </Link>
    <Link to="/Import" className="px-2" style={{ display: "block" }}>
      <div>Import Backup</div>
    </Link>
  </div>
);

function Sidebar() {
  return (
    <>
      <div className="">
        <div className="menu1">
          <Link to="/">
            <HomeOutlined style={{ fontSize: "25px" }} />
            <p>Home</p>
          </Link>
        </div>
        <div className="menu1">
          <Popover placement="right" content={content1} trigger="click">
            <FormOutlined style={{ fontSize: "25px" }} />
            <p>Entry Form</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={content2} trigger="click">
            <EditOutlined style={{ fontSize: "25px" }} />
            <p>Master Entry</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={content3} trigger="click">
            <SnippetsOutlined style={{ fontSize: "25px" }} />
            <p>Report</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={utility} trigger="click">
            <DiffOutlined style={{ fontSize: "25px" }} />
            <p>Utility</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={receiptprint} trigger="click">
            <BookOutlined style={{ fontSize: "25px" }} />
            <p>Reciept Printing</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={formprinting} trigger="click">
            <BookOutlined style={{ fontSize: "25px" }} />
            <p>Form Printing</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={tokenprinting} trigger="click">
            <KeyOutlined style={{ fontSize: "25px" }} />
            <p>Token Printing</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={Admin} trigger="click">
            <IdcardOutlined style={{ fontSize: "25px" }} />
            <p>Admin panel</p>
          </Popover>
        </div>
        <div className="menu1">
          <Popover placement="right" content={data} trigger="click">
            <DatabaseOutlined style={{ fontSize: "25px" }} />
            <p>Database</p>
          </Popover>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
