import React, {Component} from 'react';
import './navbar-item.css';

class NavbartItem extends Component{
    state ={
        name : "Nameeeeee"
    }
    render(){
        const {name} = this.state;
        return(
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">{name}</span>
        </div>
      </nav>)

    }

}

export default NavbartItem;