import React, { useState } from 'react';
import { IUser, IUserMutation } from '../../types';

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({addNewUser}) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    active: false,
    role:"user",
  });

  const [isActive, setIsActive] = useState<boolean>(false)

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setIsActive(checked);
    setNewUser((prevState) => ({
      ...prevState,
      active:checked,
    }));
  };


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0 && newUser.email.trim().length === 0) {
      alert("Try again!");
      return;
    }

    addNewUser({
        id: String(new Date()),
      ...newUser,
      });

    setNewUser({
      name: "",
      email: "",
      active: false,
      role:"user",
    });
  };

  return (
    <form onSubmit={onSubmit}>
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

      <div className="form-group form-check mb-4">
        <input
          type="checkbox"
          onChange={handleCheckbox}
          className="form-check-input"
          id="active"
          name="active"
          checked={isActive}/>
        <label className="form-check-label" htmlFor="active">
          Active
        </label>
      </div>

      <div className="form-group mb-4">
        <select
          id="role"
          name="role"
          value={newUser.role}
          onChange={changeUser}
          className="form-select"
          required
          aria-label="Default select example">
          <option selected>Select the role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Create</button>

    </form>
  );
};

export default UserForm;