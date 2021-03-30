import React, { Component } from 'react';

class GroupItem extends Component {
    state = {
        name: this.props.name,
        }
    delete = () =>{
        var group = {
        id : this.state.id,
        name: this.state.name,
    }
    this.props.removeGroup(group);
   }
   ender() {
        const { name} = this.state;
        return (
            <div  className="card col-4">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-footer">
                    <i onClick={this.delete} className="trash fas fa-trash"></i>
                </div>
            </div>)
    }
}

export default GroupItem;