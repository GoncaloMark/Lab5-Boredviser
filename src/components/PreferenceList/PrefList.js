import React, {useEffect, useState} from "react";
import MySelect from "./MySelect.js";
import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import Cards from "../Cards/Cards.js";

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
          .then((response) => arr.push(response))
  )

  setTimeout(function(){ 
    setLoading(false);

  }, 3000);
  setc(1)
}

function Rei()
{
  const [UserData, SetUserData] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [control, setControl] = useState(0)
  const [text, setText] = useState('Generate Activities')

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
  if( control>0 && loading===false) {

    return (
        <div style={{'marginTop':'0px' , 'marginBottom':'15px'}}>
          
            <Cards />
          
        </div>
    );
  }
  else {
    return (
        <div style={{'marginTop':'20px'}}>
          <div style={{width: "625px", 'margin': 'auto'}}>
            <form>
              <h2 style={{'color': 'white', 'textAlign': 'center', 'margin-bottom': '5px'}}>Select themes to generate your activities</h2>
              <MySelect
                  allowSelectAll
                  onChange={(selected) => {
                    setData(selected)
                  }}
                  options={ArrayMap}
                  closeMenuOnSelect={false}
              />
            </form>
          </div>
          <Container>
            <div style={{'margin': 'auto', 'padding': '0px'}}>
              <ButtonC 
              onClick={() => {
                if (data.length < 5 || data.length > 5) {
                  throw new Exception("SELECT 5 OPTIONS!")
                } else {Destructuring(data); console.log('estou a carregar'); setText('Loading...')}
              }}>{text}</ButtonC>
              
            </div>
          </Container>
        </div>
    );
  }

}

export default Rei
