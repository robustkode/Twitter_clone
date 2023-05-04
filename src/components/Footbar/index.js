import "./footbar.scss";
import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const index = () => {
  return (
    <div className="footbar">
      <div className="footbar__cont d-flex align-items-center justify-content-around my-2">
        <BiHomeCircle size={25} />
        <AiOutlineSearch size={25} />
        <RiNotification2Line size={25} />
        <MdOutlineLocalPostOffice size={25} />
      </div>
    </div>
  );
};

export default index;
