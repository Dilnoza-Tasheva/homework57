import { IUser } from '../../types';
import React from 'react';

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3 p-4">
        <div className="col-8">
          <h5 className="card-title">User name: {user.name}</h5>
          <p className="card-text">Email: <strong>{user.email}</strong></p>
          <p className="card-text">Active: <strong>{user.active ? 'Yes' : 'No'}</strong></p>
          <p className="card-text">Role: <strong>{user.role}</strong></p>
        </div>
    </div>
  );
};

export default UserItem;