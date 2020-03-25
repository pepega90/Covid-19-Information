import React, {Component} from 'react';
import './Countries.css';
import axios from 'axios';

import Spinner from '../../UI/Spinner/Spinner';

class Countries extends Component {
  state = {
    singleCountries: null
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.negara !== this.props.negara &&
      this.props.negara !== '-- Choose your country --'
    ) {
      axios(
        `https://covid19.mathdro.id/api/countries/${this.props.negara}`
      ).then(res => {
        const loadedSingleCountries = res.data;
        this.setState({
          singleCountries: loadedSingleCountries
        });
      });
    }
  }

  render() {
    let pepega = null;

    if (this.props.negara) {
      pepega = <Spinner />;
    }

    if (this.state.singleCountries) {
      pepega = (
        <div className="container center">
          <div className="card">
            <header className="header">
              <h1 className="title">{this.props.negara}</h1>
              <h3>
                Last Update: <em>{this.state.singleCountries.lastUpdate}</em>
              </h3>
            </header>
            <div className="card-content">
              <div className="level is-mobile">
                {/* <div className="level-item has-text-centered">
                  
                </div> */}
                <div className="column">
                  <p className="heading is-1">Confirmed</p>
                  <p style={{color: '#0080ff'}} className="title is-1">
                    {parseFloat(
                      this.state.singleCountries.confirmed.value
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="column">
                  <div>
                    <p className="heading">Deaths</p>
                    <p style={{color: '#ff0000'}} className="title is-1">
                      {parseFloat(
                        this.state.singleCountries.deaths.value
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div>
                    <p className="heading">Recovered</p>
                    <p style={{color: '#00ff40'}} className="title is-1">
                      {parseFloat(
                        this.state.singleCountries.recovered.value
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        {this.props.negara === '-- Choose your country --' ? (
          <p style={{textAlign: 'center', marginTop: '1.3rem'}}>
            Select Your Countries
          </p>
        ) : (
          pepega
        )}
      </>
    );
  }
}

export default Countries;
