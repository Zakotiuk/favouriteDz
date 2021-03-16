import React, { Component } from 'react';
import './contact-item.css';

class ContactItem extends Component {
    state = {
        name: "Contact item here",
        number: "Some number",
        image: 45,
        gender : "women"
    }
    setrandomImage = ()=>{
        var randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            image: randomAvatar
        })
    }
    render() {
        const { name, number, image , gender} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
        return (
            <div className="card col-4">
                <img width="200px" src={image_URL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{number}</p>
                </div>
                <div className="card-footer">
                    <button onClick={this.setrandomImage} className="btn btn-dark">Random image</button>
                </div>
            </div>)
    }
}

export default ContactItem;