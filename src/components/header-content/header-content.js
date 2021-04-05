import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

import './header-content.css';

const debounce = require('lodash.debounce');

const { TabPane } = Tabs;

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);

    // const { getMovie } = this.props;
    // const searchField = document.querySelectorAll('.header__search-form--search-field');

    HeaderContent.defaultProps = {
      // selectedPage: 1,
    };

    // this.onMovieSearch = (evt) => {
    //   console.log(evt.target.value);

    //   evt.preventDefault();

    //   if (evt.target.value === "") {
    //     return;
    //   }
    //   // console.log(searchField);
    //   const debouncedGetMovie = debounce(getMovie, 5500, {
    //     'leading': true,
    //     'trailing': false,
    //   });

    //   debouncedGetMovie(evt.target.value, 1);

    //   // getMovie(evt.target.value, 1);
    // };

    // this.onMovieSearch = (evt) => {

    //   console.log(selectedPage);
    //   evt.preventDefault();
    //   getMovie(evt.target.firstChild.value, selectedPage);
    // };
  }

  componentDidMount() {}

  componentDidUpdate() {
    const { getMovie } = this.props;

    this.onMovieSearch = (evt) => {
      // console.log(evt.target.value);

      evt.preventDefault();

      if (evt.target.value === '') {
        return;
      }
      // console.log(searchField);
      const debouncedGetMovie = debounce(getMovie, 250, {
        leading: true,
        trailing: false,
        maxWait: 1000,
      });

      debouncedGetMovie(evt.target.value, 1);

      // getMovie(evt.target.value, 1);
    };
  }

  render() {
    return (
      <section className="header-section">
        <Tabs className="chose-display-variant" defaultActiveKey="2" centered onChange={() => {}}>
          <TabPane tab="Search" key="1">
            {/* Content of Tab Pane 1 */}
          </TabPane>
          <TabPane tab="Rated" key="2">
            {/* Content of Tab Pane 2 */}
          </TabPane>
        </Tabs>
        <form
          className="header__search-form"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <input
            className="header__search-form--search-field"
            placeholder="type to search..."
            onChange={this.onMovieSearch}
          />
        </form>
      </section>
    );
  }
}

HeaderContent.propTypes = {
  getMovie: PropTypes.func.isRequired,
  // selectedPage: PropTypes.number,
};

// Header.propTypes = {

// };

export default HeaderContent;
