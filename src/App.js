import React, { Component, Fragment } from 'react';
import './App.css';
import NavbartItem from './components/contact-item/navbar-item'
import FormtItem from './components/contact-item/form-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/contact-list/note-list';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/contact-item/home/home'
import Page404 from './components/pageFourZeroFour/page404'
import Test from './components/test/test'
import FormIGrouptem from './components/contact-item/form-item-group'
import GroupList from './components/group-item/group-list';

class App extends Component {

  state = {

    loading : false,

    statusDelete: false,
    editContact: {},
    saveEditContact: {},
    groups:[
      {
        id : 1,
        name : "study"
      },
      {
        id : 2,
        name : "home"
      },
      {
        id : 3,
        name : "work"
      },
    ],
    contacts: [
      {
        id: 1,
        name: "Mykola Zaiets",
        number: "+38 (096) 52 88 026",
        image: 21,
        gender: "men",
        isFavorite: true
      },
      {
        id: 2,
        name: "Andrii Riabii",
        number: "+38 (095) 41 66 765",
        image: 5,
        gender: "men",
        isFavorite: false
      },
      {
        id: 3,
        name: "Vitaliy Oleksiychuk",
        number: "+38 (097) 77 88 999",
        image: 70,
        gender: "men",
        isFavorite: false
      },
      {
        id: 4,
        name: "Vika Zakotyuk",
        number: "+38 (097) 77 77 777",
        image: 21,
        gender: "women",
        isFavorite: false
      },
    ],
    notes: [
      {
        title: "Title",
        text: "Text"
      }, {
        title: "Title",
        text: "Text"
      }, {
        title: "Title",
        text: "Text"
      }
    ]
  }



  URL_Contacts = "https://contactbook-f9511-default-rtdb.firebaseio.com/contact.json";

  changeFavorite = id => {
    const index = this.state.List.findIndex(t => t.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavarite = !tempList[index].isFavarite;
    this.setState({
      List: tempList
    });
    console.log(this.state.List);
  }


  getContacs(){
    fetch(this.URL_Contacts, {method : "GET"})
    .then(data=>{
      return data.json();
    } )
    .then(contacts=> {
      console.log("Heh", contacts);
      this.setState({
        contacts : Response['-MW_Dw1lCoyuOKuPQxlX']
      })
    })
    .catch(error=>{
      console.log("error: ", error)
    })
  }

  
  changeHide = id => {
    const index = this.state.List.findIndex(t => t.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavarite = !tempList[index].isHide;
    this.setState({
      List: tempList
    });
    console.log(this.state.List);
  }

  saveChanges(collection, URL){
    fetch(URL, {method:"POST",
    headers:{
      "Content-type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(collection)
    })
    .then(data=>{
      console.log("collection", data);
    })
    .catch(error=> {
      console.log("Error: ", error);
    })
  }


  componentDidMount(){
    this.getContacs();
  }

  editContact = (editCont) => {
    this.setState({
      editContact: editCont
    })
  }
  saveEditContact = (saveCont) => {
    this.setState({
      saveEditContact: saveCont
    })
  }

  addContact = (newContact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
    }
    tempContacts.push(newContact);
    this.saveChanges(tempContacts,this.URL_Contacts);
    this.setState({
      contacts: tempContacts
    })
  }

  addGroup = (newGroup) =>{
    var tempGroups = [];
    if (this.state.groups != null) {
      tempGroups = this.state.groups.slice();
    }
    tempGroups.push(newGroup);
    this.saveChanges(tempGroups,this.URL_Contacts);
    this.setState({
      groups: tempGroups
    })
  }

  removeContact = (contact) => {
    if (this.state.contacts != null) {
      var foundIndex = this.state.contacts.findIndex(x => x.id == contact.id);
      this.state.contacts.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  removeGroup = (group) => {
    if (this.state.groups != null) {
      var foundIndex = this.state.groups.findIndex(x => x.id == group.id);
      this.state.groups.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <NavbartItem />
          <div className="container">
          <Switch>

              <Route
                path="/"
                exact
                render={() => <Home></Home>}>
              </Route>

              <Route
                path="/contact-list"
                exact
                render={() => <ContactList saveEditContact={this.saveEditContact} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact}  changeFavorite={this.changeFavorite.bind(this)} changeHide={this.changeHide.bind(this)} contacts={this.state.contacts}></ContactList>}>

              </Route>

              <Route
                path="/group-list"
                exact
                render={() => <GroupList removeContact={this.removeContact} contacts={this.state.contacts}></GroupList>}>

              </Route>

              <Route
                path="/add-group"
                exact
                render={() => <FormIGrouptem addGroup={this.addGroup} editGroup={this.state.editGroup} className="col-md-3" />}>
              </Route>

              <Route
                path="/add-contact"
                exact
                render={() => <FormtItem editContact={this.state.editContact} saveEditContact={this.saveEditContact} addContact={this.addContact} className="col-md-3" />}>
              </Route>

              <Route
                path="/favoriteContact"
                exact
                render={() => <ContactList
                  DataContact={this.state.List}
                  changeFavorite={this.changeFavorite.bind(this)}></ContactList>
                }></Route>


              <Route
                path="/test/:id"

                component={Test}>
              </Route>

              <Route
                path="*"
                render={()=> <Page404></Page404>}>
              </Route>
          </Switch>
          </div>
        </Router>
      </Fragment>)
  }
}
export default App;