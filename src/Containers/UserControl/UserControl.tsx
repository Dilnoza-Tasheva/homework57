import UserForm from '../../Components/UserForm/UserForm.tsx';
import Users from '../../Components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from '../../types';


const UserControl = () => {
  const [users, setUsers] = useState<IUser[]>([
    {id: "1", name: "Dilnoza", email: "example@gmail.com", active: true, role: "Editor"},
    {id: "2", name: "Dilnoza", email: "example@gmail.com", active: false, role: "Editor"},
    {id: "3", name: "Dilnoza", email: "example@gmail.com", active: false, role: "Editor"},
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <header>

      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <UserForm addNewUser={addNewUser}/>
          </div>
          <div className="col-md-8">
            <Users users={users}/>
          </div>
        </div>
      </main>

    </>
  );
};

export default UserControl;