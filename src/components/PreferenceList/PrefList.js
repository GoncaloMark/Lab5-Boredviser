import React, {useEffect, useState} from "react";
import MySelect from "./MySelect.js";
import {Container} from "../styles/ContainerStyles";
import {ButtonC} from "../styles/ButtonStyles";
import Cards from "../Cards/Cards.js";

export const userData = [
  { name: "education", photo:{ph:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60' , id:"education"}},
  { name: "recreational", photo:{ph:'https://images.unsplash.com/photo-1565113052401-9683a46de386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVjcmVhdGlvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60' , id: "recreational"}},
  { name: "social", photo:{ph:'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60', id:"social"} },
  { name: "diy", photo:{ph:'https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60', id:"diy" }},
  { name: "cooking", photo:{ph:'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60', id:"cooking" }},
  { name: "relaxation", photo:{ph:'https://images.unsplash.com/photo-1491172700640-4f1a131a3670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlbGF4YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', id:"relaxation" }},
  { name: "music", photo:{ph:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', id:"music" }},
  { name: "busywork", photo:{ph:'https://media.istockphoto.com/photos/working-over-time-picture-id172475923?b=1&k=20&m=172475923&s=170667a&w=0&h=XBO8E8lezH61xNL-wxTQm1bMKQ64eMbMleLXn3Whhgk=', id:"busywork" }},
  { name: "charity", photo:{ph:'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',  id:"charity"}}
];

function Exception(message)
{
  this.message = message
  this.name = "Exception"
  alert(message)
}

function Rei()
{
  const [UserData, SetUserData] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [control, setControl] = useState(0)
  const [text, setText] = useState('Generate Activities')
  const[Arr, setArr] = useState([])
  const[PH, setPH] = useState([])

  function sortResponse(a, b)
  {
    const labelA = a.type
    const labelB = b.type

     if(labelA < labelB)
     {
       return -1
     }  else if(labelA > labelB)
     {
       return 1
     } else return 0
  }

  function sortPH(a, b)
  {
    const phA = a.id
    const phB = b.id

    if(phA < phB)
    {
      return -1
    } else if(phA > phB)
    {
      return 1
    } else return 0
  }

  async function GetData(types, setLoading, setc, photos)
  {
    setLoading(true)
    await types.forEach(
        (value) => fetch("http://www.boredapi.com/api/activity?type=" + value)
            .then(response => response.json())
            .then((response) => {Arr.push(response); Arr.sort(sortResponse)})
    )

    photos.forEach((e) => {PH.push(e); PH.sort(sortPH)})

    setTimeout(function(){
      setLoading(false);

    }, 4000);
    setc(1)
  }

  useEffect(() => {
    SetUserData(userData);

  }, []);

  let ArrayMap = UserData.map((i) => ({ label: i.name, value: i.name, photo: i.photo }))

  function Destructuring(data)
  {
    let {value: value1, photo: photo1} = data[0]
    let {value: value2, photo: photo2} = data[1]
    let {value: value3, photo: photo3} = data[2]
    let {value: value4, photo: photo4} = data[3]
    let {value: value5, photo: photo5} = data[4]

    const types = [value1, value2, value3, value4, value5]
    const photos = [photo1, photo2, photo3, photo4, photo5]


    GetData(types, setLoading, setControl, photos)
  }

  if( control>0 && loading===false) {

    return (
        <div style={{'marginTop':'0px' , 'marginBottom':'15px'}}>
          
            <Cards h={Arr} f={PH}/>
          
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
                } else {Destructuring(data); setText('Loading...')}
              }}>{text}</ButtonC>
              
            </div>
          </Container>
        </div>
    );
  }

}

export default Rei
