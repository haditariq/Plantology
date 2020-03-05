import React, {Component} from 'react';
import style from './PlantDetail.module.css';
import {Col, Container, Row} from 'reactstrap';
import LocalModal from '../../Components/Modal/LocalModal';
import plantSet from '../../Datasets/Plants';
import Collections from '../Collection/Collections';

class PlantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLoginModal: false,
      plant: {},
      price: 0,
      loggedStatus: localStorage.getItem('USER'),
      collectionModal: false
    };
  }

  toggleLoginModal = () => {
    if (this.state.loggedStatus === 'true') {
      this.setState({collectionModal: true});
    } else {
      this.setState({toggleLoginModal: true});
    }
  };

  onLogin = navigate => {
    if (navigate) {
      console.log('Take user to login');
      this.setState({toggleLoginModal: false});
      this.props.history.push('/login');
    }
  };

  componentDidMount() {
    this.getPlantItem();
  }

  getPlantItem() {
    let {plant} = this.state;

    plantSet.plants.forEach((item, index) => {
      console.log(item._id, this.props.match.params._id);
      if (item._id === this.props.match.params._id) {
        plant = plantSet.plants[index];
        this.setState({plant}, () => {
          this.setState({price: this.state.plant.details.price});
        });
      }
    });
  }

  render() {
    const {plant} = this.state;
    console.log('Afad', Object.keys(plant));

    return Object.keys(plant).length > 0 ? (
      <Container style={{marginTop: '3%'}}>
        <LocalModal
          toggle={this.state.toggleLoginModal}
          onBtnClick={this.onLogin}
          description={'You must login to add a Collection.'}
          btnText={'Login'}
        />
        {this.state.loggedStatus === 'true' && this.state.collectionModal ?
          <Collections addNewCollection={()=>{this.setState({collectionModal:false})}}/> : null
        }
        <Row>
          <Col lg="7" md="12" style={{marginBottom: 25}}>
            <div
              className={style.plantGraphic}
              // src={plant.uri}
              style={{backgroundImage: `url(${plant.uri})`}}
              alt=""
            />
          </Col>
          <Col lg="5" md="12" className={style.plantDetails}>
            <h1 className={style.name}>{plant.name}</h1>
            <h5 className={style.scientificName}>{plant.subName}</h5>
            <p className={style.description}>{plant.description}</p>
            <div style={{marginTop: 25, marginBottom: 25}}>
              <div className={style.extraDetailItemContainer}>
                <p className={style.extraItemHeading}>Seed Type:</p>
                <p className={style.extraItem}>{plant.details.seed_type}</p>
              </div>
              <div className={style.extraDetailItemContainer}>
                <p className={style.extraItemHeading}>Height:</p>
                <p className={style.extraItem}>
                  {plant.details.open_pollinated}
                </p>
              </div>
              <div className={style.extraDetailItemContainer}>
                <p className={style.extraItemHeading}>Spacing:</p>
                <p className={style.extraItem}>{plant.details.spacing}</p>
              </div>
              <div className={style.extraDetailItemContainer}>
                <p className={style.extraItemHeading}>Days of Maturity:</p>
                <p className={style.extraItem}>{plant.details.maturity}</p>
              </div>
              <div className={style.extraDetailItemContainer}>
                <p className={style.extraItemHeading}>Price:</p>
                {this.props.location.query || true ? (
                  <input
                    type="text"
                    className={style.priceInput}
                    placeholder={`Price`}
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setState({price: e.target.value});
                    }}
                    value={`${this.state.price}`}
                  />
                ) : (
                  <p className={style.extraItem}>
                    $ {plant.details.price}.00 USD
                  </p>
                )}
              </div>
            </div>
            {this.props.location.query && this.props.location.query.editable ?
              <button
                className={style.updatePrice}
                onClick={() => alert('Price updated.')}
              >
                Update
              </button> :
              <button
                className={style.addToCollection}
                onClick={this.toggleLoginModal}
              >
                Add to Collection
              </button>
            }
          </Col>
        </Row>
      </Container>
    ) : null;
  }
}

export default PlantDetail;
