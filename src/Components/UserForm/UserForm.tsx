import React, { useState } from 'react';
import { IUserMutation } from '../../types';

const UserForm = () => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    active: false,
    role:"",
  });

  const [isActive, setIsActive] = useState(false);
  const [role, setRole] = useState<'user' | 'editor' | 'admin'> ('user');

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked)
  };

  return (
    <form>
      <h3>Create a new user</h3>
      <div className="form-group mb-4">
        <label htmlFor="name">User name:</label>
        <input
          type="text"
          value={newUser.name}
          onChange={changeUser}
          id="name"
          name="name"
          required
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="email">User email:</label>
        <input
          type="email"
          value={newUser.email}
          onChange={changeUser}
          id="email"
          name="email"
          required
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="btncheck1">active: </label>
        <input
          type="checkbox"
          onChange={handleCheckbox}
          className="form-check-input"
          id="btncheck1"
          checked={isActive}
          autoComplete="off"/>
      </div>

      <div className="form-group mb-4">
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'user' | 'editor' | 'admin')}
          className="form-select"
          aria-label="Default select example">
          <option selected>Open this select menu to select the role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button className="btn btn-primary">Create</button>

    </form>
  );
};

export default UserForm;