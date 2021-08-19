import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EventIcon from '@material-ui/icons/Event';
import StorefrontIcon from "@material-ui/icons/Storefront";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Thông nè"
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />
      <SidebarRow
        title="Bạn bè"
        Icon={PeopleIcon}
      />
      <SidebarRow title="Watch" Icon={OndemandVideoIcon} />
      <SidebarRow title="Trang" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Nhóm" Icon={SupervisedUserCircleIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Sự kiện" Icon={EventIcon} />
      <SidebarRow title="Kỷ niệm" Icon={AccessAlarmIcon} />
      <SidebarRow title="Xem thêm" Icon={ExpandMoreOutlined} />
      <hr />
      <div className="sidebar__lt">
        <span>Lối tắt của bạn</span>
        <div className="sidebar__img">
          <img src="https://i.pinimg.com/736x/67/59/da/6759dab67081a5ed6dc0bf74e4f5f363.jpg" alt=""></img>
          <span>ReactJS - Việt Nam</span>
        </div>
        <div className="sidebar__img">
          <img src="https://i.pinimg.com/736x/6b/cb/7b/6bcb7b56710fa6d489db7484776ebe76.jpg" alt=""></img>
          <span>Meo Méo Meo</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
