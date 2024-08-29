import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../redux/userSlice";
import Account from "../components/Account";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const { loading, error } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [formClassname, setFormClassname] = useState("form-hidden");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUsername({ username, token }));
    setFormClassname("form-hidden");
    setUsername("");
  };

  const handleEditClick = () => {
    setFormClassname("sign-in-content");
  };

  const handleCancelClick = () => {
    setUsername("");
    setFormClassname("form-hidden");
  };

  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button onClick={handleEditClick} class="edit-button">
          Edit Name
        </button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section className={`${formClassname}`}>
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder={`${user.userName}`}
            />
          </div>
          <div className="input-wrapper">
            <label>First Name</label>
            <input placeholder={`${user.firstName}`} disabled />
          </div>
          <div className="input-wrapper">
            <label>Last Name</label>
            <input placeholder={`${user.lastName}`} disabled />
          </div>
          <button type="submit" disabled={loading} className="sign-in-button">
            {loading ? "Loading..." : "Save"}
          </button>
          <button
            type="reset"
            onClick={handleCancelClick}
            disabled={loading}
            className="sign-in-button"
          >
            Cancel
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
      <Account
        title={"Argent Bank Checking (x8349)"}
        description={"Available Balance"}
        amount={"2,082.79"}
      />
      <Account
        title={"Argent Bank Savings (x6712)"}
        description={"Available Balance"}
        amount={"10,928.42"}
      />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        description={"Current Balance"}
        amount={"184.30"}
      />
    </main>
  );
};

export default User;
