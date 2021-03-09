import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      count:0
    };
   }

   increase=()=>{
     console.log('increased');
    this.setState({count:this.state.count+1});
  };

  render(){
    return(
      <div>
        <button onClick={this.increase}>Stephen's Height</button>
      
        {this.state.count}
      </div>

    );
  }
}

export default App;
