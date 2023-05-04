import React from "react";
import SearchBar from "../SearchBar";
import { RxAvatar } from "react-icons/rx";
const index = () => {
  return (
    <>
      <div className="headerExplore__searchBar px-3 my-2">
        <SearchBar />
      </div>
      <div className="headerExplore d-flex flex-column mb-5 px-3 ">
        <div className="headerExplore__title my-2">
          <p className="headerExplore__title">People you may know</p>
        </div>
        <div className="headerExplore__people d-flex flex-column">
          <div className="headerExplore__people__user d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <RxAvatar size={50} />
              <div className=" d-flex flex-column ms-2">
                <p className="headerExplore__user__details__name pb-0">fuad</p>
                <p className="headerExplore__user__details__link inactive">
                  @fuad
                </p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
