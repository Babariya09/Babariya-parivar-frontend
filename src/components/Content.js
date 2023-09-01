import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMember from "./EntryForm/MainMember";
import SubMember from "./EntryForm/SubMember";
import StudentResult from "./EntryForm/StudentResult";
import AddTaluka from "./MasterEntry/AddTaluka";
import AddDistrict from "./MasterEntry/AddDistrict";
import AddVillage from "./MasterEntry/AddVillage";
import AddOccup from "./MasterEntry/AddOccup";
import Education from "./MasterEntry/Education";
import AddRelation from "./MasterEntry/AddRelation";
import AddGroup from "./MasterEntry/AddGroup";
import AddComm from "./MasterEntry/AddComm";
import RemoveComm from "./MasterEntry/RemoveComm";
import CommMember from "./Report/CommMember";
import MemberList from "./Report/MemberList";
import DeletedMember from "./Report/DeletedMember";
import Donation from "./Report/Donation";
import Notebook from "./Report/Notebook";
import LifitimeRegister from "./Report/LifitimeRegister";
import UnpaidReg from "./Report/UnpaidReg";
import Ranker from "./Report/Ranker";
import Wilcard from "./Report/Wilcard";
import DeleteMem from "./Utility/DeleteMem";
import RetainMem from "./Utility/RetainMem";
import LifetimeFree from "./ReceiptPrint/LifetimeFree";
import LifetimeOnce from "./ReceiptPrint/LifetimeOnce";
import DonationEntry from "./ReceiptPrint/DonationEntry";
import AllPaid from "./ReceiptPrint/AllPaid";
import Uunpaid from "./ReceiptPrint/Uunpaid";
import BlankForm from "./FormReceipt/BlankForm";
import FilledForm from "./FormReceipt/FilledForm";
import BlankToken from "./TokenPrint/BlankToken";
import FilledToken from "./TokenPrint/FilledToken";
import ChangePass from "./AdminPanel/ChangePass";
import CreateUser from "./AdminPanel/CreateUser";
import LockUnlock from "./AdminPanel/LockUnlock";
import SystemUser from "./AdminPanel/SystemUser";
import Export from "./Database/Export";
import Import from "./Database/Import";
import Home from "./home/Home";

function Content() {
  return (
    <>
      <div className="p-4" style={{ background: "lightgray" }}>
        <div className="border border-slate-950 rounded-xl  bg-white">
          <Routes>
            {/* todo: Entry Form*/}
            <Route path="/" element={<Home />} />
            <Route path="/main-member" element={<MainMember />} />
            <Route path="/sub-member/:id" element={<SubMember />} />
            <Route path="/student-result" element={<StudentResult />} />
            {/* todo: Master Form*/}
            <Route path="/AddTaluka" element={<AddTaluka />} />
            <Route path="/AddDistrict" element={<AddDistrict />} />
            <Route path="/AddVillage" element={<AddVillage />} />
            <Route path="/AddOccup" element={<AddOccup />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/AddRelation" element={<AddRelation />} />
            <Route path="/AddGroup" element={<AddGroup />} />
            <Route path="/AddComm" element={<AddComm />} />
            <Route path="/RemoveComm" element={<RemoveComm />} />
            {/* todo: Reports */}
            <Route path="/CommMember" element={<CommMember />} />
            <Route path="/MemberList" element={<MemberList />} />
            <Route path="/DeletedMember" element={<DeletedMember />} />
            <Route path="/Donation" element={<Donation />} />
            <Route path="/Notebook" element={<Notebook />} />
            <Route path="/LifitimeRegister" element={<LifitimeRegister />} />
            <Route path="/UnpaidReg" element={<UnpaidReg />} />
            <Route path="/Ranker" element={<Ranker />} />
            <Route path="/Wilcard" element={<Wilcard />} />
            {/* todo: Utility */}
            <Route path="/DeleteMem" element={<DeleteMem />} />
            <Route path="/RetainMem" element={<RetainMem />} />
            {/* todo: Receipt printing */}
            <Route path="/LifetimeFree" element={<LifetimeFree />} />
            <Route path="/LifetimeOnce" element={<LifetimeOnce />} />
            <Route path="/DonationEntry" element={<DonationEntry />} />
            <Route path="/AllPaid" element={<AllPaid />} />
            <Route path="/unpaid" element={<Uunpaid />} />
            {/* todo: Form print*/}
            <Route path="/BlankForm" element={<BlankForm />} />
            <Route path="/FilledForm" element={<FilledForm />} />
            {/* todo: Token Print */}
            <Route path="/FilledToken" element={<FilledToken />} />
            <Route path="/BlankToken" element={<BlankToken />} />
            {/* todo: Admin Panel */}
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/CreateUser" element={<CreateUser />} />
            <Route path="/LockUnlock" element={<LockUnlock />} />
            <Route path="/SystemUser" element={<SystemUser />} />
            {/* todo: Database */}
            <Route path="/Export" element={<Export />} />
            <Route path="/Import" element={<Import />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Content;
