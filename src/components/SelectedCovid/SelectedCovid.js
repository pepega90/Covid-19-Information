import React, {Component} from 'react';
import axios from 'axios';
import shortid from 'shortid';

import Countries from './Countries/Countries';

class SelectedCovid extends Component {
  state = {
    selectedCountry: null,
    country: ''
  };

  selectedCountryHandler = e => {
    const {value} = e.target;
    this.setState({country: value});
  };

  componentDidMount() {
    axios('https://covid19.mathdro.id/api/countries' + this.state.country).then(
      res => {
        const negara = res.data.countries;
        const updateNegara = negara.map((value, index) => {
          return {
            ...value,
            id: shortid.generate()
          };
        });
        this.setState({selectedCountry: updateNegara});
      }
    );
  }

  render() {
    let selected = null;
    if (this.state.selectedCountry) {
      selected = this.state.selectedCountry.map(value => {
        return <option key={value.id}>{value.name}</option>;
      });
    }

    return (
      <>
        <h2 className="subtitle is-4">
          Choose your country to check the Covid-19 virus condition there
        </h2>
        <div>
          <div className="select is-primary">
            <select onChange={this.selectedCountryHandler}>
              <option>-- Choose your country --</option>
              {selected}
            </select>
          </div>
          <Countries negara={this.state.country} />
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with <span style={{color: '#e25555'}}>&#9829;</span> by Aji
              Mustofa
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default SelectedCovid;
