import { RxAvatar } from "react-icons/rx";
import { BsBookmark } from "react-icons/bs";
import "./sidebarSmall.scss";
import SidebarOption from "../../sidebarOption/SidebarOption";

const index = () => {
  return (
    <div className="sidebarSmall">
      <div className="sidebarContSmall d-flex flex-column m-4">
        <div className="sidebarContSmall__header d-flex justify-content-between align-items-center mb-3">
          <p className="mb-0">Account info</p>
          <RxAvatar size={25} />
        </div>
        <div className="sidebarContSmall__profile d-flex justify-content-between align-items-center">
          <RxAvatar size={40} />
          <RxAvatar size={25} />
        </div>
        <p className=".sidebarContSmall__username mb-0">Carl</p>
        <p className="sidebarContSmall__link inactive mb-3">@carl5052</p>
        <div className="sidebarContSmall__contacts d-flex mb-2">
          <p className="sidebarContSmall__contacts__follower me-5 flex-wrap">
            0 <span className="inactive">Following</span>
          </p>
          <p className="sidebarContSmall__contacts__following">
            0 <span className="inactive">Follower</span>
          </p>
        </div>
        <SidebarOption
          Icon={BsBookmark}
          name="Bookmarks"
          className={"mobile"}
        />
        <SidebarOption Icon={RxAvatar} name="Profile" className={"mobile"} />
      </div>
    </div>
  );
};

export default index;
