import React, { Component } from "react";
import style from "./Plant.module.css";
import { Col } from "reactstrap";
import edit from "../../Assets/edit.png";
import deleteIcon from "../../Assets/delete.png";
import { Link, withRouter } from "react-router-dom";

class Plant extends Component {
  state = {
    loggedIn: localStorage.getItem("USER")
  };

  render() {
    return this.props.item ? (
      <Col md={this.props.colMd || "3"} xs="12" className={style.container}>
        <Link
          to={`/plant-detail/${this.props.item._id}`}
          className={style.link}
        >
          <img
            className={style.thumbnail}
            src={this.props.item.uri}
            style={{ height: this.props.height || "220px" }}
            alt=""
          />
        </Link>

        <div
          className={style.infoContainer}
          style={this.props.profile ? { marginTop: 5 } : { marginTop: 5 }}
        >
          <div>
            <div className={style.flowerName}>{this.props.item.name}</div>
            <p className={style.flowerSubName}>{this.props.item.subName}</p>
          </div>
          {this.state.loggedIn === "true" && this.props.profile ? (
            <div className={style.iconContainer}>
              <Link
                to={{
                  pathname: `/plant-detail/${this.props.item._id}`,
                  query: { editable: true }
                }}
              >
                <img className={style.icon} src={edit} alt="" />
              </Link>
              <button onClick={() => this.props.onDelete(this.props.item)}>
                <img className={style.icon} src={deleteIcon} alt="" />
              </button>
            </div>
          ) : null}
        </div>
      </Col>
    ) : null;
  }
}
export default withRouter(Plant);
