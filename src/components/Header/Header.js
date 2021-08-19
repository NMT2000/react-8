import React, { Component } from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/Clear';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isDisplayAction: false,
        isDisplayAction1: false,
        isDisplayAction2: false,
        isDisplaySearch: false,
        search: '',
        darkbg: false,
    }
}
      getShowAction = () => {
        if (this.state.isDisplayAction != null) {
            this.setState({
                isDisplayAction: !this.state.isDisplayAction,
            })
        }
      }

      getShowAction1 = () => {
        if (this.state.isDisplayAction1 != null) {
            this.setState({
                isDisplayAction1: !this.state.isDisplayAction1,
            })
        }
      }

      myChangeHandler = (event) => {
        this.setState({ search: event.target.value });
      }
      render() {
        var { isDisplayAction } = this.state;
        var showAction = isDisplayAction === true ?
            <div className="btn__des">
                <div className="contact-inputtt">
                  <div className="contact-icon">
                    <button className="contact-icon__11" onClick={this.getShowAction}>
                      <ArrowBackIcon   />
                      {showAction}
                    </button>
                  </div>
                  <div className="header__input bt19">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                    
                  </div>
                  </div>
                <ul className="btn__ldt">
                    <li className="text">
                        <p className="id">Tìm kiếm gần đây</p>
                        <span className="chinhsua">Chỉnh sửa</span>
                    </li>
                </ul>
                <ul className="btn__listaction">
                    <li>
                        <img className="logo" src="https://i.pinimg.com/736x/cd/03/2c/cd032c928d18acfacdaa134c65823fda.jpg" alt="" />
                        <a href="!#">Mèo Méo Meo</a>
                        <button className="contact-icon__12">
                        <ClearIcon   />
                        </button>
                    </li>
                    <li>
                        <img className="logo" src="https://st.quantrimang.com/photos/image/2021/08/16/Anh-vit-cute-6.jpg" alt="" />
                        <a href="!#">Zitttt Ngeoo</a>
                        <button className="contact-icon__12">
                        <ClearIcon   />
                        </button>
                    </li>
                </ul>
            </div> : '';

            var { isDisplayAction1 } = this.state;
            var showAction1 = isDisplayAction1 === true ?
                <div className="btn__des1">
                    <ul className="btn__ldt1">
                        <li className="text1">
                            <div className="nav__group2">
                                <span className="chat__text">Messenger</span>
                                <img className="msg1" src="img/more.png" alt="" />
                                <img className="msg2" src="https://icons.veryicon.com/png/o/object/material_design_icons/arrow-collapse-1.png" alt="" />
                                <img className="msg3" src="img/videoo.png" alt="" />
                                <img className="msg4" src="img/edit.png" alt="" />
                            </div>
                        </li>
                        <li>
                          <div className="header__input bt20">
                            <SearchIcon />
                            <input type="text" placeholder="Search Facebook" />
                          </div>
                        </li>
                    </ul>
                    <ul className="btn__listaction1">
    
                        <li>
                            <img className="logo" src="https://i.pinimg.com/564x/65/45/ef/6545ef6867f225ebacaed2eb60b4343a.jpg" alt="" />
                            <div className="cart__des">
                                <span className="cart__item3-name">Meow Meow</span>
                                <span className="cart-singer">Hello</span>
                            </div>
                            <img className="nono1" src="https://i.pinimg.com/564x/65/45/ef/6545ef6867f225ebacaed2eb60b4343a.jpg" alt="" />
                        </li>
                        <li>
                            <img className="logo" src="https://i.pinimg.com/originals/98/87/22/988722dd5b531362ee425c9f6ef8c021.jpg" alt="" />
                            <div className="cart__des">
                                <span className="cart__item3-name">Meow Ngok</span>
                                <span className="cart-singer">Chào Thông </span>
                            </div>
                            <img className="nono2" src="https://i.pinimg.com/originals/98/87/22/988722dd5b531362ee425c9f6ef8c021.jpg" alt="" />
                        </li>
                        <li>
                            <img className="logo" src="https://i.pinimg.com/originals/c6/89/6b/c6896b023c0d5b5f40eb8a4edeb9981a.jpg" alt="" />
                            <div className="cart__des">
                                <span className="cart__item3-name">Gaugau</span>
                                <span className="cart-singer">Yeuuu emmmsss</span>
                            </div>
                            <img className="nono3" src="https://i.pinimg.com/originals/c6/89/6b/c6896b023c0d5b5f40eb8a4edeb9981a.jpg" alt="" />
                        </li>
                    </ul>
                    <ul className="btn__ldt2">
                        <li className="text2">
                            <div className="nav__group3">
                                <span className="text3">Xem tất cả trong Messenger</span>
                            </div>
                        </li>
                    </ul>
                </div> : '';



        return (
          <div className="header">
            <div className="header__left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                alt=""
              />
              <div className="header__input">
                <SearchIcon onClick={this.getShowAction} />
                 
                <input type="text" placeholder="Search Facebook" onClick={this.getShowAction}/>
                {showAction}
              </div>
            </div>
            <div className="header__center">
              <div className="header__option header__option--active">
                <HomeIcon fontsize="large" />
              </div>
              <div className="header__option">
                <FlagIcon fontsize="large" />
              </div>
              <div className="header__option">
                <SubscriptionsOutlinedIcon fontsize="large" />
              </div>
              <div className="header__option">
                <StorefrontOutlinedIcon fontsize="large" />
              </div>
              <div className="header__option">
                <SupervisedUserCircleIcon fontsize="large" />
                <div class="iconnho">9+</div>
              </div>
            </div>
            <div className="header__right">
              <div className="header__info">
                <div className="user-dp">
                  <img src="./img/nen.jpg" alt="" />
                </div>
                <h4>Thông nè</h4>
              </div>
              <IconButton className="iconn__header">
                <AddIcon />
              </IconButton>
              <IconButton className="iconn__header">
                <ForumIcon onClick={this.getShowAction1} />
                {showAction1}
              </IconButton>
              <IconButton className="iconn__header">
                <NotificationsActiveIcon />
              </IconButton>
              <IconButton className="iconn__header">
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </div>
        );
      }
}
 


export default Header;
