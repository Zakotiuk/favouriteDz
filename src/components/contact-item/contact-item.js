import React, { Component } from 'react';
import './contact-item.css';
import { v4 as uuidv4 } from 'uuid';

class ContactItem extends Component {
    state = {
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender : this.props.gender,
        groupId: this.props.groupId,
        isFavarite: false
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
    delete = () =>{
        console.log(this.state.id + 'to delete')
        var contact = {
        id : this.state.id,
        name: this.state.name,
        number: this.state.number,
        image: this.state.image,
        gender: this.props.gender,
        groupId: this.props.groupId,

        isFavorite: !this.state.isFavorite
    }
    this.props.removeContact(contact);
   }

   selectGroup = (e) => {
        var contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
            image: this.state.image,
            gender: this.state.gender,
            isFavorite: this.state.isFavorite,
            groupId: e.target.value,
        }
        this.setState({
            groupId:parseInt(e.target.value)
        })
}
   edit = () =>{
    var contact = {
    id : this.state.id,
    name: this.state.name,
    number: this.state.number,
    image: this.state.image,
    gender: this.props.gender,
    groupId: this.props.groupId,

    isFavorite: !this.state.isFavorite
    }
    this.props.editContact(contact);
}
    render() {
        const { name, number, image , gender} = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
    
        var class_start = "favorite far fa-star";
        if(this.state.isFav === true)
        {
            class_start = "favorite fas fa-star";
        }
        var groups = this.props.groups.slice();
        var groupId = this.props.groupId
        if (groupId == 0)
            groups.splice(0, 0, { id: 0, name: "Select group" })

        return (
            <div  className="card col-4">
                <img width="200px" src={image_URL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{number}</p>
                    <select className="form-control" value={this.state.groupId}
                                    onChange={this.selectGroup}>
                                    {groups.map((group) => <option key={uuidv4()} value={group.id}>{group.name}</option>)}
                                </select>
                </div>
                <div className="card-footer">
                    <button onClick={this.setrandomImage} className="btn btn-dark">Random image</button>
                    <i onClick={this.changeStar} class={class_start}></i>
                    <i onClick={this.delete} className="trash fas fa-trash"></i>
                    <i onClick={this.edit} className="trash fas fa-edit"></i>
                </div>
            </div>)
    }
}

export default ContactItem;