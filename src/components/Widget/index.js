import "./widget.scss";
import { AiOutlineSearch } from "react-icons/ai";

const index = () => {
  return (
    <div className="widget d-flex justify-content-center">
      <div className="widgetCont d-flex flex-column justify-content-between w-100 mt-1 mx-3 me-4">
        <div className="widgetCont__top">
          <div className="widgetCont__top__input mb-3 p-3 d-flex align-items-center">
            <AiOutlineSearch size={20} className="me-2 inactive" />
            <input
              type="text"
              className="inactive w-100"
              placeholder="Search Twitter"
            />
          </div>
        </div>

        <div className="widgetCont__trends d-flex flex-column justify-content-between p-3">
          <p className="widgetCont__trends__header">Trends for you</p>

          {[...Array(10)].map(() => (
            <div className="trend d-flex flex-column justify-content-between">
              <p className="trend__header inactive">Trending in Ethiopia</p>
              <p className="trend__body">Addis Ababa</p>
              <p className="trend_tweets inactive">1,105 Tweets</p>
            </div>
          ))}

          {/* <div className="trend d-flex flex-column justify-content-between">
            <p className="trend__header inactive">Trending in Ethiopia</p>
            <p className="trend__body">Addis Ababa</p>
            <p className="trend_tweets inactive">1,105 Tweets</p>
          </div>

          <div className="trend d-flex flex-column justify-content-between">
            <p className="trend__header inactive">Trending in Ethiopia</p>
            <p className="trend__body">Addis Ababa</p>
            <p className="trend_tweets inactive">1,105 Tweets</p>
          </div>

          <div className="trend d-flex flex-column justify-content-between">
            <p className="trend__header inactive">Trending in Ethiopia</p>
            <p className="trend__body">Addis Ababa</p>
            <p className="trend_tweets inactive">1,105 Tweets</p>
          </div>
          <div className="trend d-flex flex-column justify-content-between">
            <p className="trend__header inactive">Trending in Ethiopia</p>
            <p className="trend__body">Addis Ababa</p>
            <p className="trend_tweets inactive">1,105 Tweets</p>
          </div>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
