import React, {Component, Fragment} from 'react';
import ContactItem from '../contact-item/contact-item';

const ContactList = ({contacts , removeContact, editContact, saveEditContact, changeFavorite}) => {

    var contactsTemplate;
    if(contacts !== null){
        contactsTemplate = contacts.map(item=> {
            return (
                <ContactItem  removeContact={removeContact} editContact={editContact} saveEditContact={saveEditContact}
                    key = {item.id}
                    id = {item.id}
                    name = {item.name}
                    number = {item.number}
                    gender = {item.gender}
                    image = {item.image}
                    isFavarite={item.isFavarite}                    
                    changeFavorite={() => changeFavorite(item.id)}

                ></ContactItem>
            )
        })
    }

    return (
        <Fragment>
            <div className="row">
            {contactsTemplate}</div>
        </Fragment>
    )
}
export default ContactList;