
const UserForm = () => {
  return (
    <form>
      <h3>Create a new user</h3>
      <div className="form-group mb-4">
        <label htmlFor="name">User name:</label>
        <input
          type="text"
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
          id="email"
          name="email"
          required
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <label className="btn btn-outline-primary" htmlFor="btncheck1">Active</label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autoComplete="off"/>
      </div>

      <div className="form-group mb-4">
        <select
          id="role"
          className="form-select"
          aria-label="Default select example">
          <option selected>Open this select menu to select the role</option>
          <option value="1">User</option>
          <option value="2">Editor</option>
          <option value="3">Admin</option>
        </select>
      </div>

    </form>
  );
};

export default UserForm;