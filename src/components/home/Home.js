import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faComment,
  faDonate,
  faNoteSticky,
  faRoadCircleExclamation,
  faRankingStar,
  faSearch,
  faDeleteLeft,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  return (
    <>
      <div className="container-fluid scroll-m-1">
        <div className="px-10 main-content">
          <h2 className="text-left font-bold text-[25px] text-[#4895C9] pt-3 ms-2">
            BABARIYA PARIVAR SURAT
          </h2>
          <p className="text-left ml-10 text-[#808080] text-[15px] ms-2">
            Parivar Dashboard
          </p>
          <div>
            <div className="flex flex-wrap">
              <div class="ag-format-container">
                <div class="ag-courses_box">
                  <div class="ag-courses_item">
                    <Link to="/MemberList" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div className="ag-courses-item_title">
                        Babariya Parivar Member list
                      </div>

                      <div class="ag-courses-item_date-box">
                        935
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/CommMember" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Commitee Member</div>

                      <div class="ag-courses-item_date-box">
                        878
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/Donation" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Donation Register</div>

                      <div class="ag-courses-item_date-box">
                        243
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  {/* <div class="ag-courses_item">
                    <Link to="/Notebook" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">NoteBook Donation</div>

                      <div class="ag-courses-item_date-box">
                        454
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div> */}

                  <div class="ag-courses_item">
                    <Link to="/LifitimeRegister" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Lifetime Fee</div>

                      <div class="ag-courses-item_date-box">
                        213
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/remin" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Fee Remaining</div>

                      <div class="ag-courses-item_date-box">
                        635
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/Ranker" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Student Rank</div>

                      <div class="ag-courses-item_date-box">
                        765
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/Wilcard" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Member Searching</div>

                      <div class="ag-courses-item_date-box">
                        434
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>

                  <div class="ag-courses_item">
                    <Link to="/DeletedMember" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">Deleted Member</div>

                      <div class="ag-courses-item_date-box">
                        434
                        <span class="ag-courses-item_date"></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
