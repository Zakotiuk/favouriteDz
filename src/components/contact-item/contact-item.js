import React, { Component } from 'react';
import './contact-item.css';

class ContactItem extends Component {
    state = {
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender : this.props.gender,
        isFav : false
        }
    setrandomImage = ()=>{
        var randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            image: randomAvatar
        })
    }
    changeStar = ()=> {
       this.setState({
        isFav : !this.state.isFav
       });
       console.log(this.state.isFav);
    }
    render() {
        const { name, number, image , gender} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
    
        var class_start = "favorite far fa-star";
        if(this.state.isFav === true)
        {
            class_start = "favorite fas fa-star";
        }

        return (
            <div  className="card col-4">
                <img width="200px" src={image_URL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{number}</p>
                </div>
                <div className="card-footer">
                    <button onClick={this.setrandomImage} className="btn btn-dark">Random image</button>
                    <i onClick={this.changeStar} class={class_start}></i>
                </div>
            </div>)
    }
}

export default ContactItem;