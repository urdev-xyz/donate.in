import React from 'react';
import './Toolbar.css';
import Checkout from '../Checkout/Checkout';

//<form>  <input type="text" className="search" placeholder="Search..."/> </form>


class toolbar extends React.Component {
      constructor(props){
        super(props);
        console.log(this.props)
        let local = this.props.shoppingCart;
        console.log(this.props.shoppingCart)
      }

      render(){
      return(
          <div className="toolbar">
            <Checkout shoppingCart={this.props.shoppingCart}/>
          </div>
      )}
  };

export default toolbar;
