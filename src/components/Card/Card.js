import React from 'react';
import './Card.css';
import Donate from './add.svg'


class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donation: undefined};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({donation: event.target.value})
  }

  handleSubmit(event){
    if (this.state.donation === undefined || this.state.donation == 0) {
      event.preventDefault();
    }else{
      alert('You Donated: $' + this.state.donation);
      event.preventDefault();
    }
  }
    render() {
      return(
      <div key={this.props.name } className="card">
        <div className="image"></div>
        <div className="content">
          <h1 className="org">{this.props.name}</h1>
          <h2 className="org-info">{this.props.desc}</h2>
        </div>
        <div className="purchase">
          <form onSubmit={this.handleSubmit}>
          <h1>$</h1>
            <input
            value={this.state.donation} onChange={this.handleChange}
            title="dollar"
            type = "number"
            min ="0.01"
            step="0.01"
            placeholder="0.00"/>
            <button type="submit" >
            <img src={Donate} alt="submit donation"/>
            </button>
          </form>
        </div>
      </div>
    )}
};

export default card;
