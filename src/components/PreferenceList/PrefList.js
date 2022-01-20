/* import React, { useEffect, useState } from "react";

const userData = [
  { name: "Education" },
  { name: "Recreational" },
  { name: "Social" },
  { name: "DIY" },
  { name: "Charity" }
];

function App1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }

    
  };

  return (
    <div style={{ width: "500px" }}>
      <form>
        <h2 style={{ 'margin-bottom': '0' }}>Select Preferences</h2>
        <div>
          <input
            type="checkbox"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label style={{ 'color': 'white', "margin-left": "20px" }}>Select all</label>
        </div>
        {users.map((user, index) => (
          <div key={index} style={{ "padding": "0px", "padding-left": "40px" }}>
            <input
              type="checkbox"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label style={{ "margin-left": "20px", 'color': 'white' }}>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App1;
 */



import React, { useEffect, useState } from "react";
import MySelect from "./MySelect.js";

const userData = [
  { name: "education" },
  { name: "recreational" },
  { name: "social" },
  { name: "diy" },
  { name: "cooking" },
  { name: "relaxation" },
  { name: "music" },
  { name: "busywork" },
  { name: "charity" }
];

function Rei() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h2 style={{ 'color': 'white' , 'textAlign':'center'}}>Select Preferences</h2>
        <MySelect
          allowSelectAll
          onChange={(selected) => console.log(selected)}
          options={userData.map((i) => ({ label: i.name, value: i.name }))}
        />
      </form>
    </div>
  );
}

export default Rei;