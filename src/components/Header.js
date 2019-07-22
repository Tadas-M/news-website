import React from 'react'
import DropdownList from './DropDownList'

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

    return (
      <div>
          <div className="countryTag">Top News</div>
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">


              {/*<li className="nav-item nav-link">*/}
              {/*  <Link to="/lithuania">Example</Link>*/}
              {/*</li>*/}

              <DropdownList list={europeCountriesList}/>


          </nav>
      </div>
    )
}

export default Header