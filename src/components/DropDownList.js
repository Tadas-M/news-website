import React from 'react'
import {Link} from "react-router-dom";


const ListItem = ({item, id}) => {
    console.log(id);
    //return <a href="/:id">{item}</a>
    return <Link to={`/country/${id}`}>{item}</Link>
};

// const DropDownList = ({list}) => {
//     const listOfKeys = Object.keys(list);
//
//     if (listOfKeys.length>1) {
//         return listOfKeys.map(item =>
//             <ListItem
//                 item={item}
//                 key={item}
//             />)
//     }
//     return <div></div>
// };

const DropDownList = ({list}) => {
    const listOfKeys = Object.keys(list);

    if (listOfKeys.length>1) {
        return <div className="dropdown">
                    <button className="dropbtn">Europe</button>
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