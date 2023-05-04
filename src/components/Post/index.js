import "./post.scss";
import { RxAvatar } from "react-icons/rx";
import Body from "../../asset/body.jpeg";

import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";

const index = () => {
  return (
    <div className="post p-3 d-flex">
      <div className="post__profile me-2">
        <RxAvatar />
      </div>
      <div className="post__content d-flex flex-column w-100">
        <div className="post__content__header">
          <span className="username pe-1">Elon Musk</span>
          <span className="link inactive pe-1">@elonmusk</span>
          <span className="time inactive pe-1">·1h</span>
        </div>
        <div className="post__content__body">
          <p>Falcon Heavy</p>
          <img src={Body} alt="" />
        </div>
        <div className="post__content__reactions d-flex justify-content-between pt-3">
          <FaRegComment className="inactive" />
          <AiOutlineRetweet className="inactive" />
          <AiOutlineHeart className="inactive" />
          <IoStatsChartOutline className="inactive" />
          <MdOutlineFileUpload className="inactive" />
        </div>
      </div>
    </div>
  );
};

export default index;
