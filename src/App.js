import React, {Component} from "react";
import UserCard from "./components/UserCard";
import SearchField from "./components/SearchField";
import './App.css';

class App extends Component {
  state = {query: "", user: {}}

  async componentDidMount (){
    const result = await fetch(`https://api.github.com/users/${this.state.query}`);
    const obj = await result.json();
    this.setState({user: obj});
    console.log(this.state.user);
  }

 

  render(){
    return (
    <div className="App">
      <SearchField />
      <UserCard user={this.state.user}/>
    </div>
  );}
  
}

export default App;
