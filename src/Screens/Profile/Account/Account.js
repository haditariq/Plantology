import React, { Component } from "react";
import style from "./Account.module.css";
import ProfileBar from "../../../Components/ProfileBar/ProfileBar";
import { Col, Container, Input, Row } from "reactstrap";
import cameraIcon from "../../../Assets/camera.png";

class Account extends Component {
  state = {
    imageBase: null
  };
  imagePicker = () => {
    document.getElementById("imageField").click();
  };
  handleChange = event => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.setState({ imageBase: reader.result });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

  render() {
    return (
      <div className={style.container}>
        <Container>
          <Row>
            <Col md="4" xs="12">
              <ProfileBar />
            </Col>
            <Col md="8" xs="12" className={style.containerSpace}>
              <h3 className={style.heading}>My Account</h3>
              <div className={style.fieldContainer}>
                <p className={style.head}>Full Name</p>
                <Input type="text" className={style.input} />
              </div>
              <div className={style.fieldContainer}>
                <p className={style.head}>Email Address</p>
                <Input type="email" className={style.input} />
              </div>

              <h3 className={style.heading}>Profile Photo</h3>
              <button
                className={style.pictureBtn}
                style={this.state.imageBase ? { border: 0, padding: 0 } : {}}
                onClick={this.imagePicker}
              >
                <input
                  type="file"
                  className={style.input}
                  id={"imageField"}
                  style={{ width: 0, height: 0, opacity: 0 }}
                  onChange={this.handleChange}
                />
                {this.state.imageBase ? (
                  <img
                    src={this.state.imageBase}
                    alt=""
                    className={style.cameraIcon}
                    style={{
                      height: 101,
                      width: 101,
                      borderRadius: 5,
                      boxShadow: "0px 0px 3px 2px rgba(128, 128, 128, 0.5)"
                    }}
                  />
                ) : (
                  <img src={cameraIcon} alt="" className={style.cameraIcon} />
                )}
              </button>
              <button className={style.btn}>Upload Profile</button>
              <h3 className={style.heading}>Change Password</h3>
              <div className={style.fieldContainer}>
                <p className={style.head}>New Password</p>
                <Input type="password" className={style.input} />
              </div>
              <div className={style.fieldContainer}>
                <p className={style.head}>Confirm Password</p>
                <Input type="password" className={style.input} />
              </div>
              <button className={style.btn}>Change Password</button>
              <h3 className={style.heading}>Delete Account</h3>
              <button className={style.deleteBtn}>Are you Sure ?</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Account;
