import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PublicIcon from '@material-ui/icons/Public';
import React from "react";
import "./Post.css";
import { ExpandMoreRounded } from "@material-ui/icons";
function Post({ profilePic, image, username, timestamp, message, main, time }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <span className="post__title">{main}</span>
          <div className="day__post">
            <div className="day__post--public">
              <div className="daymy__post">
                <span className="daymy__post--1">{time}</span>
              </div>
              <PublicIcon />
            </div>
          </div>
        </div>
        <div className="btn__post">
          <button className="contact-icon__15">
            <MoreHorizIcon   />
          </button>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
        <span>{timestamp}</span>
        <span>{username}</span>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="cart__item3-hang3">
        <img className="cart__image-hang3" src="https://smarkgo.com/uploads/general/aboutbanner7_zi2PWkCcMd.png" alt="" />
        <span className="carttext-hang3">6,3K</span>
        <span className="carttext2-hang3">239 bình luận &nbsp;&nbsp; 138 lượt chia sẻ</span>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Thích</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Bình luận</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Chia sẽ</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>
    </div>
  );
}

export default Post;
