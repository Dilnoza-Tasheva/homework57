

const UserItem = () => {
  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">

        <div className="col-6">
          <h5 className="card-title">User name:</h5>
          <p className="card-text">Email: </p>
          <p className="card-text">Active</p>
          <p className="card-text">Role: </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;