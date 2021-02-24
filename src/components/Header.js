import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    
    return(
        <div>
            <header>
                <h1>Work Helper</h1>
                <div className="menu-icon"><i className="fa fa-phone fa-lg"></i></div>
            </header>
            <nav>
                <ul>
                    <li><Link to='/'>Workflow</Link></li>
                    <li><Link to='/phonebook'>Phonebook</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
