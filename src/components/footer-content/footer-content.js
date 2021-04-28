import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

import './footer-content.css';

class FooterContent extends React.Component {
  constructor(props) {
    super(props);

    const { changePage } = this.props;

    FooterContent.defaultProps = {
      moviesCount: 6,
      moviesPerPage: 10,
      selectedPage: 1,
      changePage: () => {},
    };

    this.changePage = (page) => {
      changePage(page);
    };
  }

  render() {
    const { moviesPerPage, moviesCount, selectedPage } = this.props;

    return (
      <footer className="footer">
        <div>
          <Pagination
            onChange={this.changePage}
            total={moviesCount}
            current={selectedPage}
            defaultCurrent={1}
            defaultPageSize={moviesPerPage}
            pageSizeOptions={[20, 50, 100]}
            simple
          />
        </div>
      </footer>
    );
  }
}

FooterContent.propTypes = {
  moviesCount: PropTypes.number,
  moviesPerPage: PropTypes.number,
  selectedPage: PropTypes.number,
  changePage: PropTypes.func,
};

export default FooterContent;
