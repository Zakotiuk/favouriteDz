import React, { Component } from 'react';

class FormGrouptem extends Component {
    state = {
        name: "",
        MessangeError: ""
    }

    submitForm = (e) => {
        e.preventDefault();
        const {name} = this.props.editGroup;
        if({name}!== null)
        {
            var newGroup = {
                name: this.state.name,
            }
            this.props.saveEditGroup(newGroup);
        }
        if (this.isvalid()) {
            this.setState({ MessangeError: "" })
            var newGroup = {
                name: this.state.name,
            }
            
            this.props.addGroup(newGroup);
        }
        else {
            this.setState({
                MessangeError: "Pleace, enter all fileds"
            })
        }
    }
    isvalid = () => {
        if (this.state.name === "" || this.state.number === "")
            return false;
        else
            return true;
    }

    handlerChangeInput = (e) => {
        var key = e.target.name;
        var value = e.target.value;
        this.setState({
            [key]: value
        })

    }
    render() {
        const {name, number, image} = this.props.editGroup;
        const { MessangeError } = this.state;
        console.log(this.state)
        return (
            <form onSubmit={this.submitForm}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="name" onChange={this.handlerChangeInput} aria-describedby="emailHelp" placeholder={name} />
                    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
                </div>
                <p className="text-danger">{MessangeError}</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default FormGrouptem;