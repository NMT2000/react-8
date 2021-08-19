import React from "react";
import "./Widget.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Widget() {
  return (
    <div className="widget">
        <div className="widget__tong">
            <div className="widget__taitro">
                <span className="taitro__text">Được tài trợ</span>
                <div className="taitro__img">
                    <img src="img/meow.png" alt=""></img>
                    <div className="taitro__text">
                        <h5>Shooppp Meoww</h5>
                        <span>ShopppMeow.vn</span>
                    </div>
                </div>
            </div>
            <div className="widget__group">
                <div className="widget__contact">
                    <div className="widget__contact--icon">
                        <span role="heading" className="contact-text">Chaoooo</span>
                        <div className="contact-iconn">
                            <div className="contact-icon">
                                <button className="contact-icon__1">
                                    <VideoCallIcon />
                                </button>
                            </div>
                            <div className="contact-icon">
                                <button className="contact-icon__1">
                                    <SearchIcon /> 
                                </button>
                            </div>
                            <div className="contact-icon">
                                <button className="contact-icon__1">
                                    <MoreHorizIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{overflow: 'visible', height: 0, width: 0}}>
                    <div style={{position: 'fixed', overflow: 'hidden', width: '300px', height: '450px'}}>
                        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'scroll', WebkitOverflowScrolling: 'touch', marginRight: 0, marginBottom: 0}}>
                            <div aria-label="grid" aria-readonly="true" className="ReactVirtualized__Grid ReactVirtualized__List" role="grid" style={{boxSizing: 'border-box', direction: 'ltr', height: '168px', position: 'relative', width: '300px', willChange: 'transform', outline: 'none'}} tabIndex={0}>
                                <div className="ReactVirtualized__Grid__innerScrollContainer" role="rowgroup" style={{width: 'auto', height: '3000px', maxWidth: '300px', maxHeight: '3000px', overflow: 'hidden', position: 'relative'}}>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '0px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/81021953_1019611015066086_1084206138154549248_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lbikAEuUg60AX_NtQb3&_nc_ht=scontent.fsgn2-6.fna&oh=584053a4c0feac4ec06b654f2db3a651&oe=6141B5F0" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Phi Phàm</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '60px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/152744528_1652490334923523_3389415565447834776_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3JObVDUNM4QAX_tn6Zq&_nc_ht=scontent.fsgn2-2.fna&oh=2c3f3ade00f9f799dd64f0b14a9575d2&oe=6143ECF8" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Lê Minh Hyyy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '120px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/184884277_1618867194980681_4523561078430206335_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PNjjlVI8a2sAX-Q0YTg&_nc_ht=scontent.fsgn2-5.fna&oh=ea2fa1f5602b9a377eb2788df76e2958&oe=61438246" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Phạm Hoàng Quy</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '180px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://i.pinimg.com/236x/d9/c7/6a/d9c76af6addb28f10bd0ef262794fb98.jpg" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Meoww Meoww</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '240px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Gauw Gauw</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '300px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/hot8-1629130889395889998278.jpg" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Zit Zittts</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '360px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://znews-photo.zadn.vn/w660/Uploaded/mdf_vsxrlu/2021_01_22/meo_3_2.jpg" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">Lê Thị Tèo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-1ddewra-0 fEcMIq" style={{height: '60px', left: '0px', position: 'absolute', top: '420px', width: '100%'}}>
                                        <div className="sc-1ddewra-0 hKiWpL">
                                            <div className="sc-1masyjf-0 eUJiHM">
                                                <div className="sc-10v6zep-0 czLfup">
                                                    <div className="sc-1ddewra-0 iRrsnD">
                                                        <div className="sc-1rfu1tx-1 OevYa">
                                                            <img src="https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg" className="sc-1rfu1tx-0 hRKSnL" />
                                                        </div>
                                                    </div>
                                                <span className="aayn0q-0 hPiUaS">AwwwwwwMoa</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div style={{position: 'absolute', height: '6px', transition: 'opacity 200ms ease 0s', opacity: 0, display: 'none', right: '2px', bottom: '2px', left: '2px', borderRadius: '3px'}}>
                            <div style={{position: 'relative', display: 'block', height: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)'}}>
                            </div>
                        </div>
                        <div style={{position: 'absolute', width: '6px', transition: 'opacity 200ms ease 0s', opacity: 0, display: 'none', right: '2px', bottom: '2px', top: '2px', borderRadius: '3px'}}>
                            <div style={{position: 'relative', display: 'block', width: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)'}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resize-triggers">
                    <div className="expand-trigger">
                        <div style={{width: '301px', height: '100%'}}>
                        </div>
                    </div>
                    <div clasName="contract-trigger">
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Widget;
