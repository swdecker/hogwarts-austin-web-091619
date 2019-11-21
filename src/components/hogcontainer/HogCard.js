import React, { Component } from 'react';

class HogCard extends Component {
    state = {
        showDetails:false,
        showCard:false
    }
   handleClick = ()=>{
       this.setState((prevState)=>{
           return {showDetails:!prevState.showDetails}
       })
   }

   hideCard = ()=>{
       this.setState({showCard: !this.showCard})
   }

    render() {
        return (
            <div onClick={this.handleClick} className="column">
                <div style={this.state.showCard ? {display: "none"} : {display: "block"}} className="ui fluid card">
                <button onClick={this.hideCard} >Hide Pig</button>
                <div className="image">
                    <img src={this.props.image} />
                </div>
                <div className="content">
                    <p className="header">{this.props.hogName}</p>
                {this.state.showDetails ? <div class="meta"><p>Weight: {this.props.weight}</p></div>  :"" }
                {this.state.showDetails ? <div class="meta"><p>Specialty: {this.props.specialty}</p></div>  :"" }
                {this.state.showDetails ? <div class="meta"><p>Highest Medal Achieved: {this.props.medal}</p></div>  :"" }
                </div>
                </div>
            </div>
        );
    }
}

export default HogCard;