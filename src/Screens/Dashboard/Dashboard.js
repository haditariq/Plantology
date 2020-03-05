import React, {Component} from 'react';
import style from './Dashboard.module.css';
import Plant from '../../Components/Plant/Plant';
import { Container, Row} from 'reactstrap';
import plantSet from '../../Datasets/Plants';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1,
      showCount: 8,
      plantdata: plantSet.plants
    };
  }

  pagination = () => {
    let {pageCount, showCount} = this.state;
    showCount = showCount * (pageCount + 1);
    this.setState({showCount, pageCount: pageCount + 1});
  };

  flowerFilter = () => {
    // TODO: calculation
    let {plantdata} = this.state;
    let query = this.props.queryValue;
    plantdata = plantdata.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
    this.setState({plantdata})

  };


  render() {
    return (
      <div>
        <p className={style.heading}>Plant Database</p>
        <div className={style.plantListContainer}>
          <Container>
            <Row>
              {this.state.plantdata
                .slice(0, this.state.showCount)
                .map((item, ind) => {
                  return <Plant key={ind} item={item}/>;
                })}
            </Row>
          </Container>
        </div>

        {this.state.showCount < plantSet.plants.length ? (
          <div className={style.moreContainer}>
            <button className={style.more} onClick={this.pagination}>
              More
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dashboard;
