import React from 'react';
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
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
  
    componentWillUnmount(){
      if (this.timerHandle) {
        clearTimeout(this.timerHandle);
        this.timerHandle = 0;
      }
    }
   
    render() {
        
      return (
        
        <div className="sweet-loading">
          <ClipLoader
            size={20}
            css={override}
            size={"50px"} this also works
            color={"#248232"}
            margin={"10px"}
            loading={this.state.loading}
          />
           
           <Jumbotronhome />
            <Gettingstarted />
            <Truckhome />
            <Reviews />
            <Footer />
          

        </div>

      );
    }
  }
export default SpinnerComponent;