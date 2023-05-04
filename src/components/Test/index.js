import React from "react";
import "./test.scss";

const index = () => {
  return (
    <div className="widget d-flex justify-content-center">
      <div className="widgetCont d-flex flex-column justify-content-between w-100">
        <div className="widgetCont__input">
          <input
            type="text"
            className=" mt-2 mb-3 inactive"
            placeholder="Search Twitter"
          />
        </div>
        <div className="widgetCont__trends d-flex flex-column justify-content-between">
          <p className="widgetCont__trends__header">Trends for you</p>

          {[...Array(10)].map(() => (
            <div className="trend d-flex flex-column justify-content-between">
              <p className="trend__header inactive">Trending in Ethiopia</p>
              <p className="trend__body">Addis Ababa</p>
              <p className="trend_tweets inactive">1,105 Tweets</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
