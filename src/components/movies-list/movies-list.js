import React from 'react';
// import PropTypes from 'prop-types';

import './movies-list.css';


export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Movie1",
    }
  }

  render() {
    
    return (
      <section className="movies">
          <section className="movies-list">
            <div className="movie">
              <a href="#" className="movie__link">
                <img src="#"  
                      className="movie__poster" 
                      alt="Movie1" 
                      width="183" 
                      height="281"/>
              </a>
              <div className="movie__description">
                <h2 className="movie__name">{this.state.name}</h2>
                <div className="movie__release-date">Date</div>
                <div className="movie__genre">
                  <span className="movie__genre--name">Action</span>
                  <span className="movie__genre--name">Drama</span>
                </div>
                <div className="movie__description--text">
                  text text text text text text text text text text text text
                  bigtextwithoutsomewhitespacestotest
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                </div>
              </div>
            </div>
            <div className="movie">
              <a href="#" className="movie__link">
                <img src="#"  
                      className="movie__poster" 
                      alt="Movie1" 
                      width="183" 
                      height="281"/>
              </a>
              <div className="movie__description">
                <h2 className="movie__name">Movie2</h2>
                <div className="movie__release-date">Date</div>
                <div className="movie__genre">
                  <span className="movie__genre--name">Action</span>
                  <span className="movie__genre--name">Drama</span>
                </div>
                <div className="movie__description--text">
                  text text text text text text text text text text text text
                  bigtextwithoutsomewhitespacestotest
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                </div>
              </div>
            </div>
            <div className="movie">
              <a href="#" className="movie__link">
                <img src="#"  
                      className="movie__poster" 
                      alt="Movie1" 
                      width="183" 
                      height="281"/>
              </a>
              <div className="movie__description">
                <h2 className="movie__name">Movie3</h2>
                <div className="movie__release-date">Date</div>
                <div className="movie__genre">
                  <span className="movie__genre--name">Action</span>
                  <span className="movie__genre--name">Drama</span>
                </div>
                <div className="movie__description--text">
                  text text text text text text text text text text text text
                  bigtextwithoutsomewhitespacestotest
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                  text text text text text text text text text text text text
                </div>
              </div>
            </div>
            <div className="movie">Movie4</div>
            <div className="movie">Movie5</div>
            <div className="movie">Movie6</div>
          </section>
        </section>
    );
  }
}

// Header.propTypes = {
  
// };

// export default MoviesList;
