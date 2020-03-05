import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileBar from "../../Components/ProfileBar/ProfileBar";
import style from "./Profile.module.css";
import plantCollections from "../../Datasets/ProfilePlantCollections";
import Plant from "../../Components/Plant/Plant";
import LocalModal from "../../Components/Modal/LocalModal";

class Profile extends Component {
  state = {
    showDeleteModal: false,
    loginToFollow: false,
    loggedStatus: localStorage.getItem("USER"),
    showLength: 3,
    collections: plantCollections.collections
  };

  editItem = item => {
    // this.props.history.push('./register');
  };

  onDelete = item => {
    // alert('delete');
    this.setState({ showDeleteModal: true });
    console.log(item);
  };

  onDeletePress = () => {
    this.setState({ showDeleteModal: false });
  };
  loginModalToggle = () => {
    if (this.state.loggedStatus === "true") {
      this.setState({ loginToFollow: false });
    } else {
      this.setState({ loginToFollow: true });
    }
  };
  onLoginPress = () => {
    this.props.history.push("./login");
  };

  seeAllPlants = collectionIndex => {
    let { collections } = this.state;
    collections = collections[collectionIndex];
    const collName = Object.keys(collections)[0];
    console.log(collections[collName].length);

    this.setState({
      collections: [collections],
      showLength: collections[collName].length
    });
  };

  render() {
    console.log({ profileProps: this.props });
    return (
      <div className={style.container}>
        <LocalModal
          toggle={this.state.showDeleteModal}
          onBtnClick={this.onDeletePress}
          description={"Are you sure you want to delete plant?"}
          btnText={"Delete"}
          btnStyle={{ backgroundColor: "red", border: 0 }}
        />
        <LocalModal
          toggle={this.state.loginToFollow}
          onBtnClick={this.onLoginPress}
          description={"You must login to add a Collection."}
          btnText={"Login"}
        />
        <Container>
          <Row className={style.row}>
            <Col md="4" xs="12">
              <ProfileBar loginModalToggle={this.loginModalToggle} />
            </Col>
            <Col md="8" xs={"12"}>
              <Container className={style.collectionContainer}>
                <div className={style.collectionDataContainer}>
                  {this.state.collections.map((item, ind) => {
                    return (
                      <div key={ind}>
                        <div className={style.collectionHead}>
                          <h5 style={{ fontWeight: "500" }}>
                            {Object.keys(item)}
                          </h5>
                          <button
                            className={style.seeAll}
                            onClick={() => this.seeAllPlants(ind)}
                          >
                            See All
                          </button>
                        </div>
                        <div className={style.plantListContainer}>
                          <Row>
                            {item[Object.keys(item)]
                              .slice(0, this.state.showLength)
                              .map((item, ind) => {
                                return (
                                  <Plant
                                    key={ind}
                                    item={item}
                                    colMd={"4"}
                                    height={"180px"}
                                    onEdit={this.editItem}
                                    onDelete={this.onDelete}
                                    profile={true}
                                    edit={true}
                                  />
                                );
                              })}
                          </Row>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
