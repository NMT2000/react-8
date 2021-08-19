import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import Video from "./Video"
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Video />
      <Post
        profilePic="https://i.pinimg.com/originals/1b/d0/89/1bd08915b26edbd4e23ea453e6c60edd.jpg"
        image="https://chiase24.com/wp-content/uploads/2019/08/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-One-Piece-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-3.jpg"
        message="Thôi xong... Lufffyyy đã tiến vào Wano Quốc!!!"    
        timestamp="https://gamek.vn/luffy-danh-bai-kaido.htm"
        username="#Luffyyy #Zooorooo #KaiiDooooooo"
        main="Tin tức Onee Pieceeee"
        time="Hôm qua"
      />
      <Post
        profilePic="https://www.pngitem.com/pimgs/m/240-2405798_kawaii-dog-corgi-blush-i-want-a-corgi.png"
        image="https://i.pinimg.com/originals/ad/50/7b/ad507b0dd1d98204e1d25eed004999de.png" 
        message="Phát hiện Corgiii uống chà chửa"    
        timestamp="https://gamek.vn/luffy-danh-bai-kaido.htm"
        username="#Luffyyy #Zooorooo #KaiiDooooooo"
        main="GauGau-VN"
        time="30 phút"
      />  
    </div>
  );
}

export default Feed;
