import React from 'react'
import DropDownList from './DropDownList'
import {Link} from "react-router-dom";


function NavigationBar( {items} ) {
    // console.log(window.location.href);
    return (
        <nav className="navbar navbar-expand-lg justify-content-center dark-background header-border">
            {items.map(item => {
                return (
                    <div className="news-category-container volkorn" key={item}>
                        <Link to={`${item}`}>
                            {item}
                        </Link>
                    </div>
                )})}
        </nav>
    )
}

function CategoryNavigationBar () {
    const categoriesApi = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
    const categoriesRss = ["World", "Business", "Health", "Technology", "Sports"];

    if (window.location.href.includes("country")) { return <NavigationBar items={categoriesApi}/> }
    else { return <NavigationBar items={categoriesRss}/> }
    }

function Header() {
    const europeCountriesList = {
        'Austria': 'AT',
        'Belgium': 'BE',
        'Bulgaria': 'BG',
        'Switzerland': 'CH',
        'Czech Republic': 'CZ',
        'Germany': 'DE',
        'France': 'FR',
        'United Kingdom': 'GB',
        'Greece': 'GR',
        'Hungary': 'HU',
        'Ireland': 'IE',
        'Italy': 'IT',
        'Lithuania': 'LT',
        'Latvia': 'LV',
        'Netherlands': 'NL',
        'Norway': 'NO',
        'Poland': 'PL',
        'Portugal': 'PT',
        'Romania': 'RO',
        'Serbia': 'RS',
        'Russian Federation': 'RU',
        'Sweden': 'SE',
        'Slovenia':	'SI',
        'Slovakia':	'SK',
        'Ukraine': 'UA'
    };
    const nAmericaCountiesList = {
        'United States': 'US',
        'Canada': 'CA',
        'Mexico': 'MX',
        'Cuba': 'CU'
    };
    const sAmericaCountiesList = {
        'Argentina': 'AR',
        'Venezuela': 'VE',
        'Brazil': 'BR',
        'Colombia': 'CO'
    };
    const asiaCountiesList = {
        'United Arab Emirates': 'AE',
        'China': 'CN',
        'Hong Kong': 'HK',
        'Indonesia': 'ID',
        'Israel': 'IL',
        'India': 'IN',
        'Japan': 'JP',
        'South Korea': 'KR',
        'Malaysia': 'MY',
        'Philippines': 'PH',
        'Saudi Arabia': 'SA',
        'Singapore': 'SG',
        'Thailand': 'TH',
        'Turkey': 'TR',
        'Taiwan': 'TW'
    };
    const africaCountiesList = {
        'Egypt': 'EG',
        'Morocco': 'MA',
        'Nigeria': 'NG',
        'South Africa': 'ZA'
    };
    const australiaCountiesList = {
        'Australia': 'AU',
        'New Zealand': 'NZ'
    };

    return (
      <div>
          <div className="page-title dark-background volkorn">
              <Link to={`/world`} className="title-text">World News</Link>
          </div>
          <nav className="navbar navbar-expand-lg justify-content-center dark-background">
              <DropDownList list={europeCountriesList} listName={'Europe'}/>
              <DropDownList list={nAmericaCountiesList} listName={'North America'}/>
              <DropDownList list={sAmericaCountiesList} listName={'South America'}/>
              <DropDownList list={africaCountiesList} listName={'Africa'}/>
              <DropDownList list={asiaCountiesList} listName={'Asia'}/>
              <DropDownList list={australiaCountiesList} listName={'Australia'}/>
          </nav>
      </div>
    )
}

export {Header, CategoryNavigationBar}