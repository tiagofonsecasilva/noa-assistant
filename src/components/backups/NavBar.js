import React from 'react';
import './style.css'
import WeatherList from './Weather';
import LoginButton from './Auth0/loginWithRedirect';
import withAuth0 from './Auth0/withAuth0';
import Posts from './Auth0/posts';
import LogoutButton from './Auth0/logout';
import Profile from './Auth0/user';

class App extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="overlap-group">
          <div className="frame-6">
            <WeatherList />
          </div>
        </div>
        <Group4
          aa="Search tasks, news, etc"
          combinedShape="https://anima-uploads.s3.amazonaws.com/projects/60e43f41a72a001b79f76252/releases/60f6e837e4b2be7041179c17/img/combined-shape@2x.svg"
        />
        <img
          className="line-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60e43f41a72a001b79f76252/releases/60f6e837e4b2be7041179c17/img/line-3@2x.svg"
        />
        <Group2
          notification="https://anima-uploads.s3.amazonaws.com/projects/60e43f41a72a001b79f76252/releases/60f6f843482f73d38c7e4780/img/notification@2x.svg"
          number="1"
        />
        <withAuth0 />
        <LoginButton />
          <Posts />
          <LogoutButton />
          <Profile />
      </div>
    );
  }
}

export default App;

class Group4 extends React.Component {
  render() {
    const { aa, combinedShape } = this.props;

    return (
      <div className="group-4">
        <div className="aa valign-text-middle sfprotext-regular-normal-jumbo-13px">{aa}</div>
        <img className="combined-shape" src={combinedShape} />
      </div>
    );
  }
}


class Group2 extends React.Component {
  render() {
    const { notification, number } = this.props;

    return (
      <div className="group-2">
        <div className="overlap-group1">
          <img className="notification" src={notification} />
          <div className="group-1">
            <div className="overlap-group2">
              <div className="ellipse-2"></div>
              <div className="number valign-text-middle">{number}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Frame2 extends React.Component {
  render() {
    const { name, manager, ellipse1 } = this.props;

    return (
      <div className="frame-2">
        <div className="frame-1">
          <div className="name valign-text-middle manrope-extra-bold-gravel-14px">{name}</div>
          <div className="manager valign-text-middle manrope-medium-gravel-14px">{manager}</div>
        </div>
        <img className="ellipse-1" src={ellipse1} />
      </div>
    );
  }
}

