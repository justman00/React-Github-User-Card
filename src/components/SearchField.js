import React, {Component} from "react";

class SearchField extends Component {
    state={name: ""}
    
    handleSubmit = (evt) =>{
        alert("A name was submitted ")
        evt.preventDefault();
    }

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
            <input type="submit" value="Submit"></input>
        </form>
    );
}
}
export default SearchField;