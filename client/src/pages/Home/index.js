import React from 'react';
import "./style.css";
import Jumbotronhome from '../../components/Jumbotronhome';
import Gettingstarted from '../../components/Gettingstarted';
import Truckhome from '../../components/Truckhome';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



class SpinnerComponent extends React.Component {
   
    render() {
        
      return (
        <div className="sweet-loading">
          <ClipLoader
            size={20}
            css={override}
            //size={"150px"} this also works
            color={"#248232"}
            loading={this.props.loading}
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