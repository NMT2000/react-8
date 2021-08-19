import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://img.lostbird.vn/2018/05/09/173947/4.jpg"
        title="Meoww"
        profileSrc="https://www.pngitem.com/pimgs/m/468-4687301_kawaii-cat-galleta-galletita-cookie-kawaii-hnh-mo.png"
      />
      <Story
        image="https://img.lostbird.vn/2018/05/09/173947/5.jpg"
        title="GauuGauu"
        profileSrc="https://i.pinimg.com/originals/a8/3d/9c/a83d9c4a4d74b77a98e10a8ec95113a0.png"
      />
      <Story
        image="https://st.quantrimang.com/photos/image/2020/06/19/Hinh-Nen-Meo-Ngao-37.jpg"
        title="Zorooo"
        profileSrc="https://i.pinimg.com/originals/3f/dd/a6/3fdda6941ab4cfdceb995b5adbe95482.jpg"
      />
      <Story
        image="https://i.pinimg.com/736x/17/6b/47/176b47e6261368faa979adf4b1916dbb.jpg"
        title="Sam"
        profileSrc="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg"
      />
      <Story
        image="https://cuoifly.tuoitre.vn/820/0/ttc/r/2021/08/17/trend-vit-vang-01-1629170351.jpeg"
        title="Sachin"
        profileSrc="https://media.travelmag.vn/files/content/2021/08/16/236199770_930789434447481_6880618898202487660_n-87195f3a-19332065.jpg"
      />
    </div>
  );
}

export default StoryReel;
