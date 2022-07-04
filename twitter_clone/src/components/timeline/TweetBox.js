import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="いまどうしてる" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
        ></input>
        <Button className="tweetBox__tweetButton" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
