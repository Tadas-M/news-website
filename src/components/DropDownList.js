import React from 'react'
import {Link} from "react-router-dom";

const ListItem = ({item, id}) => {
    return <Link to={`/country/${id}/General`}>{item}</Link>
};

const DropDownList = ({list, listName}) => {
    const listOfKeys = Object.keys(list);

    if (listOfKeys.length>0) {
        return <div className="dropdown volkorn">
                    <button className="dropbtn dark-background">{listName}</button>
                    <div className="dropdown-content">
                        {listOfKeys.map(item =>
                            <ListItem
                                item={item}
                                id={list[item]}
                                key={list[item]}
                            />)}
                    </div>
                </div>
    }
    return <div></div>
};

export default DropDownList