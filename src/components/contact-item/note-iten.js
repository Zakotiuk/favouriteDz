import React, { Component } from 'react';

class NoteItem extends Component {
    state = {
        title: "Title",
        text: "Text"
    }
    render() {
        const { title, text } = this.state;
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        )

    }

}

export default NoteItem;