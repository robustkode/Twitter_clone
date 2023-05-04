import React from "react";
import { FaHome } from "react-icons/fa";
import { BiHomeCircle, BiHash } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "./sidebar.scss";
import SidebarOption from "../sidebarOption/SidebarOption";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebarCont d-flex flex-column ms-3">
        <div className="sidebarCont__logo my-3 ps-3">
          <BsTwitter size={25} className="not-small" />
        </div>

        <SidebarOption
          Icon={BiHomeCircle}
          name="Home"
          className="not-small"
          onClick={() => navigate("/")}
        />
        <SidebarOption
          Icon={AiOutlineSearch}
          name="Explore"
          className="sidebarCont__search-small"
          onClick={() => navigate("/explore")}
        />
        <SidebarOption
          Icon={BiHash}
          name="Explore"
          className="sidebarCont__search-large not-small"
          onClick={() => navigate("/explore")}
        />
        <SidebarOption
          Icon={RiNotification2Line}
          name="Notifications"
          className="not-small"
          onClick={() => navigate("/notifications")}
        />
        <SidebarOption
          Icon={MdOutlineLocalPostOffice}
          name="Messages"
          className="not-small"
          onClick={() => navigate("/messages")}
        />
        <SidebarOption
          Icon={BsBookmark}
          name="Bookmarks"
          onClick={() => navigate("/bookmarks")}
        />
        <SidebarOption
          Icon={RxAvatar}
          name="Profile"
          onClick={() => navigate("/Profile")}
        />

        <div className="sidebarCont__logout d-flex mt-auto mb-5 not-small">
          <div className="sidebarCont__logout__cont d-flex pt-auto justify-content-between px-3">
            <div className="sidebarCont__logout__cont__profile">
              <RxAvatar size={40} onClick={() => navigate("/login")} />
            </div>
            <div className="d-flex flex-column align-items-start mx-3 sidebar__profile-container">
              <p className="sidebarCont__logout__cont__name mb-0">Name</p>
              <p className="sidebarCont__logout__cont__link mb-0">Link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
