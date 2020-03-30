import React, {Component} from 'react';

import Navbar from '../../components/Navigation/Navbar/NavigationItems';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    mobile: false
  };

  clickHander = () => {
    this.setState(prevState => {
      return {
        mobile: !prevState.mobile
      };
    });
  };

  render() {
    return (
      <>
        <Navbar click={this.clickHander} open={this.state.mobile} />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
