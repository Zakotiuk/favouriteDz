import React, {Component, Fragment} from 'react';
import GroupItem from './group-item';


const GroupList = ({group , removeGroup}) => {

    var groupsTemplate;
    if(group !== null){
        groupsTemplate = group.map(item=> {
            return (
                <GroupItem  removeGroup={removeGroup}
                    id = {item.id}
                    name = {item.name}
                ></GroupItem>
            )
        })
    }

    return (
        <Fragment>
            <div className="row">
            {groupsTemplate}</div>
        </Fragment>
    )
}
export default GroupList;