import React, {Component} from 'react';
import axios from 'axios';
import styling from './News.module.css';

import Spinner from '../../components/UI/Spinner/Spinner';

class News extends Component {
  state = {
    berita: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    axios
      .get('https://api.u9.nu/covid19')
      .then(res => {
        const {berita} = res.data;
        this.setState({berita: berita, loading: false});
      })
      .catch(error => {
        this.setState({loading: false, error: true});
      });
  }

  render() {
    let news = null;
    if (this.state.berita) {
      news = this.state.berita.map((news, index) => {
        return (
          <div
            key={news.judul + index}
            className="column is-4"
            style={{display: 'inline-block'}}
          >
            <div className={styling.card}>
              <div className="card-image">
                <figure className="image">
                  <img src={news.gambar} alt={news.gambar} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{news.judul}</p>
                    <p className="subtitle is-6">Kategori: {news.kategori}</p>
                    <time dateTime="2016-1-1">{Date(news.tanggal * 1000)}</time>
                  </div>
                </div>
              </div>
              <div className="content">
                <a href={news.link} className="button is-info is-rounded">
                  Read More
                </a>
              </div>
            </div>
          </div>
        );
      });
    }

    if (this.state.loading) {
      news = <Spinner />;
    }

    if (this.state.error) {
      news = <h1>Sorry Sometimes News Page Can't be loaded</h1>;
    }

    return (
      <div className="container">
        <h1 className={[styling.title, 'is-1'].join(' ')}>News Covid-19</h1>
        <div className={styling.columns}>{news}</div>
      </div>
    );
  }
}

export default News;
