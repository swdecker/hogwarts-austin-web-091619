import React, { Component } from 'react';

class HogsFilter extends Component {
    state = {
        isChecked:false
        // sort:"name"
    
    }
    handleGreased=()=>{
        this.setState({
            isChecked: !this.state.isChecked 
        })
        this.props.filteredHogs(!this.state.isChecked)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filteredHogs(this.state.isChecked)
    }

    handleSort = (event) => {
        this.props.sortedHogs(event.target.value)
        // this.setState({sort: event.target.value})
    }


    render() {
        return (
            <div style={{marginBottom: '50px'}}>
                <form onSubmit={this.handleSubmit}>
                    <p>You want them greasy hogs only ?</p> <input onChange={this.handleGreased} value={this.state.isChecked} type='checkbox' className='greased' />
                     <select onChange={this.handleSort}>
                        <option value="name">Alphabetical</option>
                        <option value="weight">Weight</option>
                      
                    </select>
                    {/* <input type="Submit" value="SERT HAWGS" /> */}
                </form>
            </div>
        );
    }
}

export default HogsFilter;