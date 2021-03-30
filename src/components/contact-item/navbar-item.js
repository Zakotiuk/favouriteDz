import React, {Component} from 'react';
import './navbar-item.css';
import {Link} from 'react-router-dom'

class NavbartItem extends Component{
    state ={
        name : "Nameeeeee"
    }
    render(){
        const {name} = this.state;
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand nav-link mb-0 h1" to="/">{name}</Link>
          <Link className="nav-item nav-link" to="/contact-list">Contact list</Link>
          <Link className="nav-item nav-link" to="/favoriteContact">Favorite list</Link>
          <Link className="nav-item nav-link" to="/add-contact">Add contact</Link>

        </div>
      </nav>)

    }

}

export default NavbartItem;