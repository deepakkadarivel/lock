import React from 'react';
import { NavLink } from 'react-router-dom';
import t from '../../translation';
import './style.scss';

const Links = () => {
    return (
        <div className="Links">
            <ul>
                <li>
                    <NavLink
                        className="Links-item"
                        exact
                        activeClassName="Links-item--active"
                        to="/"
                    >
                        <i className="material-icons">home</i>
                        <span className="Links-item--text">
                            {t('nav.home')}
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="Links-item"
                        activeClassName="Links-item--active"
                        to="/people"
                    >
                        <i className="material-icons">person_outline</i>
                        <span className="Links-item--text">
                            {t('nav.people')}
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="Links-item"
                        activeClassName="Links-item--active"
                        to="/doors"
                    >
                        <i className="material-icons">meeting_room</i>
                        <span className="Links-item--text">
                            {t('nav.doors')}
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="Links-item"
                        activeClassName="Links-item--active"
                        to="/events"
                    >
                        <i className="material-icons">update</i>
                        <span className="Links-item--text">
                            {t('nav.events')}
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Links;
