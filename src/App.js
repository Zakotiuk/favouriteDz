import React, { Component, Fragment } from 'react';
import './App.css';
import ContactItem from './components/contact-item/contact-item'
import NavbartItem from './components/contact-item/navbar-item'
import FormtItem from './components/contact-item/form-item'


class App extends Component {

  state = {
    contacts: [
      {
        name: "Contact item here",
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
        name: "Contact item here",
        number: "Some number",
        image: 49,
        gender: "men"
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

                <ContactItem ></ContactItem>
                <ContactItem ></ContactItem>
                <ContactItem ></ContactItem>

              </div>
            </div>
          </div>
        </div>
      </Fragment>)
  }
}


export default App;
