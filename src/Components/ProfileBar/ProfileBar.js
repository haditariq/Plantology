import React, { Component } from "react";
import style from "./ProfileBar.module.css";
import {Link, withRouter} from 'react-router-dom';

class ProfileBar extends Component {
  state = {
    loggedIn: localStorage.getItem("USER"),
    loginToFollowModal:false
  };

  render() {
    console.log(this.state.loggedIn);
    return (
      <div className={style.container}>

        <div className={style.userContainer}>
          <img
            className={style.avatar}
            src="https://learned.guru/wp-content/uploads/2017/11/dummy-user2.jpg"
            alt=""
          />
          <p className={style.userName}>Bifalco LandScaping, Inc.</p>
          <p className={style.userAlias}>Smuel Bifalco</p>
            <button className={style.followBtn} onClick={this.props.loginModalToggle}>Follow</button>
          <hr className={style.breakLine} />
        </div>
        <p className={style.tagHeading}>Tags</p>
        <div className={style.tagsContainer}>
          <div className={style.tag}>Spring</div>
          <div className={style.tag}>Summer</div>
          <div className={style.tag}>Fall</div>
          <div className={style.tag}>Winter</div>
        </div>
        {this.state.loggedIn === "true" ? (
          <div>
            <p className={style.tagHeading}>Menu</p>
            <div style={{ margin: 5 }} />
            <button className={style.menuItem}>
              <Link to={"/account"}>My Account</Link>
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(ProfileBar);
