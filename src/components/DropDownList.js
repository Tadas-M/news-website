import React from 'react'
import {Link} from "react-router-dom";

const ListItem = ({item, id}) => {
    function addAnimationClass () {
        const content = document.getElementsByClassName("homepage");
        console.log("content", content);
        if(content[0] != null) {
            content[0].classList.remove("fade-in");
            content[0].classList.add("fade-out");
        }
    }

    // function stopReload (e, id) {
    //     e.preventDefault();
    //     window.history.pushState("object or string", "Country news", `/country/${id}`)
    //     addAnimationClass()
    // }


    // return <Link to={`/country/${id}`} onClick={e => stopReload(e,id)}>{item}</Link>
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