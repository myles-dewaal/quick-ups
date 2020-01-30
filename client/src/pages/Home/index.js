import React from 'react';
import "./style.css";
import Jumbotronhome from '../../components/Jumbotronhome';
import Gettingstarted from '../../components/Gettingstarted';
import Truckhome from '../../components/Truckhome';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



class SpinnerComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
   
    render() {
        
      return (
        <div className="sweet-loading">
          <ClipLoader
            size={150}
            css={override}
            //size={"150px"} this also works
            color={"#123abc"}
            loading={this.state.loading}
          />
          {/* <Jumbotronhome />
            <Gettingstarted />
            <Truckhome />
            <Reviews />
            <Footer /> */}

        </div>

      );
    }
  }
export default SpinnerComponent;