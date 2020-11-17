import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './style.scss';
import { ProfileDetail } from '../ProfileDetail/index.jsx';
import { ProfileStatistic } from '../ProfileStatistic/index.jsx';
import search from '../img/search.svg';

export const Profile = (match) => {
  const location = match.location.pathname;
  const pokemon = match.location.state;

  return (
    <>
      <div className="profile">
        <div className="navbar">
          <nav className="navbar__wrapper">
            <ul className="navbar__list">
              <Link
                to={{
                  pathname: `/pokemon/${pokemon.name}`,
                  state: pokemon,
                }}
                className="navbar__link"
              >
                <li
                  className={
                    location === `/pokemon/${pokemon.name}/statistic`
                      ? 'navbar__item navbar__item--inactive'
                      : 'navbar__item'
                  }
                >
                  <img className="navbar__icon" src={search} />
                  Profil
                </li>
              </Link>
              <Link
                to={{
                  pathname: `/pokemon/${pokemon.name}/statistic`,
                  state: pokemon,
                }}
                className="navbar__link"
              >
                <li
                  className={
                    location === `/pokemon/${pokemon.name}`
                      ? 'navbar__item navbar__item--inactive'
                      : 'navbar__item'
                  }
                >
                  <img className="navbar__icon" src="../img/arrows.svg" />
                  Statistiky
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        {location === `/pokemon/${pokemon.name}/statistic` ? (
          <ProfileStatistic pokemon={pokemon} />
        ) : (
          <ProfileDetail pokemon={pokemon} />
        )}
      </div>
      <Route path="/:pokemon/:name" component={ProfileDetail} />
      <Route path="/:pokemon/:name/:tab" component={ProfileStatistic} />
    </>
  );
};
