import React, { Component, Fragment } from 'react';
import './App.css';
import ContactItem from './components/contact-item/contact-item'
import NavbartItem from './components/contact-item/navbar-item'
import FormtItem from './components/contact-item/form-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/contact-list/note-list';


class App extends Component {

  state = {
    contacts: [
      {
        name: "Contact here",
        number: "Some number",
        image: 46,
        gender: "men"
      },
      {
        name: "Contact item here",
        number: "Some number",
        image: 45,
        gender: "women"
      },
      {
        name: "Item here",
        number: "Some number",
        image: 49,
        gender: "men"
      }
    ],
    notes: [
      {
        title : "Title",
        text : "Text"
      },{
        title : "Title",
        text : "Text"
      },{
        title : "Title",
        text : "Text"
      }
    ]
  }

  render() {
    return (
      <Fragment>

        <NavbartItem />
        <h2>Smth u know</h2>
        <div className="container">
          <div className="row">

            <div className="col-3">
              <FormtItem className="col-md-3" />
            </div>
            <div className="col-9">
              <div className="row">

               <ContactList contacts={this.state.contacts}></ContactList>

              </div>
            </div>
          </div>
          <NoteList notes={this.state.notes}></NoteList>
        </div>
      </Fragment>)
  }
}


export default App;
