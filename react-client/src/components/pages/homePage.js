import React, { Component } from 'react';
import Photo from '../../img/photo.jpg';

class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="home-page-left">
         <div id="photo" className="home-page-photo" style={{ backgroundImage: `url(${ Photo })` }} />
        </div>
        <div className="home-page-right">
          <div className="home-page-name">
            <div className="name">
              <span>Alexander</span>
            </div>
            <div className="surname">
              <span>Grygorenko</span>
            </div>
            <div className="dev">
              <span>Front-end developer</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;