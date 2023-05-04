import React from "react";
import "./tweet.scss";
import { RxAvatar } from "react-icons/rx";

const Tweet = () => {
  return (
    <div className="tweet-box d-flex p-3">
      <div className="tweet-box__profile me-2">
        <RxAvatar />
      </div>
      <div className="tweet-box__bottom d-flex justify-content-between w-100">
        <form className="tweet-box__bottom__form w-100">
          <input
            className="w-100 my-2"
            type="text"
            placeholder="What's happening?"
          />
          <div className="d-flex justify-content-between mt-3">
            <div className="tweet-box__bottom__options">options</div>
            <button className="px-3 py-1" type="submit">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tweet;
