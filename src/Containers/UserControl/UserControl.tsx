import UserForm from '../../Components/UserForm/UserForm.tsx';
import Users from '../../Components/Users/Users.tsx';


const UserControl = () => {
  return (
    <>
      <header>

      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <UserForm/>
          </div>
          <div className="col-4 mb-2">
            <Users/>
          </div>
        </div>
      </main>

    </>
  );
};

export default UserControl;