import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Spin, Alert } from 'antd';
import 'antd/dist/antd.css';

import './index.css';
import HeaderContent from './components/header-content';
import MoviesList from './components/movies-list';
import FooterContent from './components/footer-content';
import mapiService from './services/mapi-service';

// import './components/header-content/header-content.css'
// import './components/footer-content/footer-content.css'

const { Header, Footer, Content } = Layout;

class MoviesApp extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesList: [],
      selectedPage: 1,
      moviesCount: 20,
      loading: false,
      error: false,
      errMessage: null,
      errDescription: null,
      currentMovie: 'reted',
    };

    this.onError = (err, errMessage, errDescription) => {
      console.log(`ERROR!${err}`);
      this.setState(() => ({
        error: true,
        loading: false,
        errMessage,
        errDescription,
      }));
    };

    this.getMovie = async (movieTosearch, pageNum) => {
      let movies;
      let page;
      let moviesCount;

      this.setState(() => ({
        loading: true,
        currentMovie: movieTosearch,
        selectedPage: pageNum,
      }));

      try {
        const baseResponse = await mapiService.getMovie(movieTosearch, pageNum);
        movies = baseResponse.results;
        page = baseResponse.page;
        moviesCount = baseResponse.totalPages;
        // console.log(movies);
      } catch (err) {
        this.onError(err, 'Network Error', 'Could not receive data from server');
      }

      this.setState(() => ({
        moviesList: movies,
        loading: false,
        selectedPage: page,
        moviesCount,
        // currentMovie: movieTosearch,
      }));
    };

    this.getTopRated = async (movieTosearch, pageNum) => {
      let movies;
      let page;
      let moviesCount;

      this.setState(() => ({
        loading: true,
        currentMovie: movieTosearch,
        selectedPage: pageNum,
      }));

      try {
        const baseResponse = await mapiService.getTopRated(movieTosearch, pageNum);
        movies = baseResponse.results;
        page = baseResponse.page;
        moviesCount = baseResponse.totalPages;
      } catch (err) {
        this.onError(err, 'Network Error', 'Could not receive data from server');
      }

      this.setState(() => ({
        moviesList: movies,
        loading: false,
        selectedPage: page,
        moviesCount,
        currentMovie: movieTosearch,
      }));
    };

    this.getGenreConfig = async () => {
      try {
        await mapiService.downloadGenreConfig();
      } catch (err) {
        this.onError(err, 'Network Error', "Can't get genre config");
      }
    };

    // this.setPage = (page) => {
    //   console.log(page);
    // };

    this.changePage = (page) => {
      this.getMovie(this.state.currentMovie, page);
      this.setState(() => ({
        selectedPage: page,
      }));
    };
  }

  componentDidMount() {
    this.getGenreConfig();
    this.getTopRated();
  }

  render() {
    const { loading, error, errMessage, errDescription } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <Alert message={errMessage} description={errDescription} type="error" /> : null;
    const spinner = loading ? (
      <div className="spin-wraper">
        <Spin />
      </div>
    ) : null;
    const content = hasData ? <MoviesList moviesList={this.state.moviesList} onError={this.onError} /> : null;

    const footerContent = error ? (
      <FooterContent />
    ) : (
      <FooterContent
        moviesCount={this.state.moviesCount}
        moviesPerPage={20}
        selectedPage={this.state.selectedPage}
        changePage={this.changePage}
        getMovie={this.getMovie}
      />
    );

    return (
      <Layout id="appbody">
        <Header className="header">
          <HeaderContent getMovie={this.getMovie} />
        </Header>
        <Content className="main">
          {errorMessage}
          {spinner}
          {content}
        </Content>
        <Footer>{footerContent}</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<MoviesApp />, document.getElementById('moviesapp'));
