import React from 'react';
import './leftbar.css';
import Profile from './Auth0/user';
import LoginButton from './Auth0/loginWithRedirect';
import CurrentDate from './Date';


class LeftBar extends React.Component {
  render() {
    return (
      <div className="frame-18">
        <div className="frame-16">
          <div className="group-336">
            <div className="group-8-2">
              <div className="overlap-group">
                <img
                  className="notification-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/notification@2x.svg"
                alt=""/>
                <div className="group-1">
                  <div className="overlap-group1">
                    <div className="ellipse-2"></div>
                    <div className="number valign-text-middle">1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="notification-2 manrope-normal-white-16px">Notification</div>
          </div>
          <div className="group-339">
            <img
              className="group-8-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/group-8@2x.svg"
            alt=""/>
            <div className="messages manrope-normal-white-16px">Messages</div>
          </div>
          <div className="group-337">
            <img
              className="group-8-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/group-8-1@2x.svg"
              alt=""/>
            <div className="to-do-list manrope-normal-white-16px">To-do list</div>
          </div>
          <div className="group-338">
            <img
              className="group-8-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/group-8-2@2x.svg"
              alt=""/>
            <div className="news manrope-normal-white-16px">News</div>
          </div>
          <Group340
            group8="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/group-8-3@2x.svg"
            notification="Notification"
          />
          <Group340
            group8="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/group-8-4@2x.svg"
            notification="Notification"
          />
        </div>
        <div className="frame-17">
          <div className="flex-row">
          <LoginButton />
            <Profile />
          </div>
          <img
            className="line-10"
            src="https://anima-uploads.s3.amazonaws.com/projects/60f9b55d871c93ece37620f1/releases/60f9b6a4450c82962c5db22b/img/line-10@2x.svg"
            alt=""/>
          <div className="flex-row-1">
            <CurrentDate/>
          </div>
        </div>
      </div>
    );
  }
}
export default LeftBar;
class Group340 extends React.Component {
  render() {
    const { group8, notification } = this.props;
    return (
      <div className="group-34">
        <img className="group-8" src={group8} alt=""/>
        <div className="notification manrope-normal-white-16px">{notification}</div>
      </div>
    );
  }
}


