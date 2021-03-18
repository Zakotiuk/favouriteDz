import React, {Component, Fragment} from 'react';
import NoteItem from '../contact-item/note-iten';

const NoteList = ({notes}) => {

    var noteTemplate;
    if(notes !== null){
        noteTemplate = notes.map(item=> {
            return (
                <NoteItem
                title = {item.title}
                text = {item.text}
                ></NoteItem>
            )
        })
    }

    return (
        <Fragment>
            {noteTemplate}
        </Fragment>
    )
}

export default NoteList;