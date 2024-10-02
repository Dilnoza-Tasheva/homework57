import { IUser } from '../../types';
import React from 'react';

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3 p-4">
        <div className="col-8">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Active: {user.active ? 'Yes' : 'No'}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
    </div>
  );
};

export default UserItem;