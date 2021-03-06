import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from "../shared/UIElements/Avatar";
import Card from "../shared/UIElements/Card";
import './UserItem.css';

const UserItem = props => {
    return (
      <li className="user-item">
        <div className="user-item_content">
          <Card>
            <Link to={`/${props.id}/places`}>
              <div className="user-item__image">
                <Avatar image={props.image} alt={props.name} />
              </div>
              <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>
                  {props.placeCount}{" "}
                  {props.placeCount === 1 ? "Place" : "Places"}
                </h3>
              </div>
            </Link>
          </Card>
        </div>
      </li>
    );
};

export default UserItem;