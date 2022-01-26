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


import React, {useEffect, useState} from "react";
import MySelect from "./MySelect.js";
import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";

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

function Exception(message)
{
  this.message = message
  this.name = "Exception"
  alert(message)
}

async function GetData(types, setLoading, arr=[], setc)
{
  setLoading(true)
  await types.forEach(
      (value) => fetch("http://www.boredapi.com/api/activity?type=" + value)
          .then(response => response.json())
          .then((response) => arr.push(response) )
  )

  setLoading(false)
  setc(1)
}

function Rei()
{
  const [UserData, SetUserData] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [control, setControl] = useState(0)

  const array = []

  useEffect(() => {
    SetUserData(userData);

  }, []);

  let ArrayMap = UserData.map((i) => ({ label: i.name, value: i.name }))

  function Destructuring(data)
  {
    let {value: value1} = data[0]
    let {value: value2} = data[1]
    let {value: value3} = data[2]
    let {value: value4} = data[3]
    let {value: value5} = data[4]

    const types = [value1, value2, value3, value4, value5]

    GetData(types, setLoading, array, setControl)

    console.log(array)

  }
  if( control>0 ) {

    return (
        <div>
          cards
        </div>
    );
  }
  else {
    return (
        <div>
          <div style={{width: "500px", 'margin': 'auto'}}>
            <form>
              <h2 style={{'color': 'white', 'textAlign': 'center', 'margin-bottom': '5px'}}>Select Preferences</h2>
              <MySelect
                  allowSelectAll
                  onChange={(selected) => {
                    setData(selected)
                  }}
                  options={ArrayMap}
              />
            </form>
          </div>
          <Container>
            <div style={{'margin': 'auto', 'padding': '0px'}}>
              <ButtonC onClick={() => {
                if (data.length < 5 || data.length > 5) {
                  throw new Exception("SELECT 5 OPTIONS!")
                } else Destructuring(data)
              }}>Generate Activities</ButtonC>
            </div>
          </Container>
        </div>
    );
  }

}

export default Rei
