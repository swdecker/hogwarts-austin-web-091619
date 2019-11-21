import React, { Component } from 'react';
import HogsFilter from './HogsFilter';
import HogsList from './HogsList';

class HogsContainer extends Component {
    state = {
        hogsToShow: [],
        greased: false,
        sort: "name",
        hogsToHide: []
    }

    componentDidMount(){
        console.log(this.props.hogs)
        this.setState({hogsToShow: this.props.hogs})
    }

hogUpdater=()=>{
    let newHogs = [...this.props.hogs].sort((hog1,hog2)=>{
        if(hog1[this.state.sort] < hog2[this.state.sort]){
            return 1
        } else {
            return -1
         }
    })
    if(this.state.greased){
        newHogs = newHogs.filter((hog)=>hog.greased === true)
     }
     this.setState({hogsToShow: newHogs})
}
componentDidUpdate(){
    this.hogUpdater()
}

// sortHogs = (sort) => {
//     let newHogs = [...this.props.hogs].sort((hog1,hog2)=>{
//         if(hog1[sort] < hog2[sort]){
//             return 1
//         } else {
//             return -1
//          }
//     })
//     this.setState({hogsToShow: newHogs})
// }


// filterHogs = (greased) => {
//     // greased should be true or false, sort should be name or weight
//     let newHogs = [...this.props.hogs]

//     if(greased){
//         newHogs = newHogs.filter((hog)=>hog.greased === true)
//      }
        
//     this.setState({hogsToShow: newHogs})
// }
filterHogs = (greased)=>{
    this.setState({greased: greased})
}
sortHogs = (sort)=>{
    this.setState({sort:sort})
}


    render() {
        return (
            <div>
                <HogsFilter filteredHogs={this.filterHogs} sortedHogs={this.sortHogs} />
                <HogsList hogs={this.state.hogsToShow} />
            </div>
        );
    }
}

export default HogsContainer;