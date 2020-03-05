import React, {Component} from 'react';
import {Modal, ModalBody} from 'reactstrap';
import style from './Collections.module.css';
import addIcon from '../../Assets/add.png';
import crossIcon from '../../Assets/crossBlack.png';

class Collections extends Component {
  state = {
    addNew: false
  };
  addNewCollection = () => {
    alert("New Collection added. Thank you!")
  };

  addToCollection = () => {
    alert("Flower added to existing Collection.")
  };

  revertBackToSelectOne = () => {
    this.setState({addNew: false});
  }

  createNewCollection = () => {
    this.setState({addNew: true});
  };


  render() {
    return (
      <div>
        <Modal isOpen={true} className={style.container}>
          {!this.state.addNew ? (
            <ModalBody className={style.body}>
              <p className={style.heading}>Add this plant to a Collection</p>
              <button className={style.cross} onClick={this.props.addNewCollection}>
                <img src={crossIcon} alt="" className={style.crossIcon}/>
              </button>
              <input
                type="text"
                placeholder={'Find an existing collection'}
                className={style.searchBar}
              />
              <p className={style.smallHeading}>Recent Collection</p>
              <div className={style.collectionContainer}>
                <div className={style.collectionItem}>
                  <input type="checkbox" className={style.checkbox}/>
                  <p className={style.collectionName}>
                    Client - Samuel Bifalco
                  </p>
                </div>
                <div className={style.collectionItem}>
                  <input type="checkbox" className={style.checkbox}/>
                  <p className={style.collectionName}>
                    Client - Samuel Bifalco
                  </p>
                </div>
                <div className={style.collectionItem}>
                  <input type="checkbox" className={style.checkbox}/>
                  <p className={style.collectionName}>
                    Client - Samuel Bifalco
                  </p>
                </div>
              </div>
              <hr className={style.breakLine}/>
              <button onClick={this.createNewCollection} className={style.addColContainer}>
                <img src={addIcon} alt="" className={style.addIcon}/>
                <p className={style.addColText}>Create a new collection</p>
              </button>
              <hr className={style.breakLine}/>
              <button onClick={this.props.addNewCollection} className={style.addtoCollectionBtn}>Add to Collection</button>
            </ModalBody>
          ) : (
            <ModalBody className={style.body}>
              <p className={style.heading}>Create a New Collection</p>
              <button className={style.cross} onClick={this.props.addNewCollection}>
                <img src={crossIcon} alt="" className={style.crossIcon}/>
              </button>
              <input
                type="text"
                placeholder={'Collection name'}
                className={style.searchBar}
              />

              <p className={style.newCollectionText}>New Collection</p>
              <div className={style.collectionItem} style={{marginTop:10,marginBottom:30}}>
                <input type="checkbox" className={style.checkbox}/>
                <p className={style.collectionName}>
                  Client - Samuel Bifalco
                </p>
              </div>
              <button onClick={this.revertBackToSelectOne} className={style.revertToSelectCollection}>Back to recent Collections</button>
              <button onClick={this.props.addNewCollection} className={style.addtoCollectionBtn}>Create Collection</button>
            </ModalBody>
          )}
        </Modal>
      </div>
    );
  }
}

export default Collections;
