import React, { Component } from 'react';

class FormItem extends Component {
    state = {
        name: "",
        number: "",
        image: 0,
        gender: "men",
        MessangeError: ""
    }

    submitForm = (e) => {
        e.preventDefault();
        const {name, number, image} = this.props.editContact;
        if({name}!== null)
        {
            var newContact = {
                name: this.state.name,
                number: this.state.number,
                image: this.state.image,
            }
            this.props.saveEditContact(newContact);
        }
        if (this.isvalid()) {
            this.setState({ MessangeError: "" })
            var newContact = {
                name: this.state.name,
                number: this.state.number,
                image: this.state.image,
                gender: this.state.gender,
            }
            
            this.props.addContact(newContact);
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
        const {name, number, image} = this.props.editContact;
        const { MessangeError } = this.state;
        console.log(this.state)
        return (
            <form onSubmit={this.submitForm}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="name" onChange={this.handlerChangeInput} aria-describedby="emailHelp" placeholder={name} />
                    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="number" onChange={this.handlerChangeInput} aria-describedby="emailHelp" placeholder={number}/>
                    <div id="emailHelp" class="form-text">We'll never share your phone with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">gender</label>
                    <select name="gender" onChange={this.handlerChangeInput} className="form-control">
                        <option value="women">women</option>
                        <option value="men">men</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Image</label>
                    <input type="text" class="form-control" name="image" id="exampleInputEmail1" onChange={this.handlerChangeInput} aria-describedby="emailHelp" placeholder={image} />
                    <div id="emailHelp" className="form-text">We'll never share your image with anyone else.</div>
                </div>
                <p className="text-danger">{MessangeError}</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default FormItem;