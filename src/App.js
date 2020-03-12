import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const h1Style={
    color:"green",
    backgroundColor:"white"
  }

  const country=["Bangladesh","UK","USA","Portugal","Canada","Spain","Newzeland"];
  const location=["south asia","europe","North america","North america","europe","australia"];
  
  const info =[
                {country:"Bangladesh",location:"south asia"},
                {country:"UK",location:"europe"},
                {country:"USA",location:"North america"},
                {country:"Portugal",location:"europe"},
                {country:"Canada",location:"North america"},
                {country:"Spain",location:"europe "},
                {country:"Newzeland",location:"australia"},
                {country:"Argentina",location:"South america"}
              ];


              
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}

        <Counter></Counter>

        <Users></Users>

        <ul>
          {
            country.map(element =><li>{element}</li>)

          }
        </ul>

        <p style={{color:"#ff2399",backgroundColor:"cyan"}}>React app</p>
        <h1 style={h1Style}>SAMPAD SARKER</h1>

        {/* <MyComponent desh={country[0]} region={location[0]}></MyComponent>
        <MyComponent desh={country[1]} region={location[1]}></MyComponent>
        <MyComponent desh={country[2]} region={location[2]}></MyComponent>
        <MyComponent desh={country[3]} region={location[3]}></MyComponent> */}

        
        {/* <MyComponent desh={info[0].country} loc={info[0].location}></MyComponent> */}
        <MyComponent geo={info[0]}></MyComponent>
        <MyComponent geo={info[1]}></MyComponent>
        <MyComponent geo={info[2]}></MyComponent>
        <MyComponent geo={info[3]}></MyComponent>
        <MyComponent geo={info[4]}></MyComponent>
        <MyComponent geo={info[5]}></MyComponent>
        <MyComponent geo={info[6]}></MyComponent>
        <MyComponent geo={info[7]}></MyComponent>


        <ul>
          {
            info.map(element => <li>{element.country}  {element.location} </li>)
          }
        </ul>


        <ul>
          {
            info.map(element =><MyComponent geo={element}></MyComponent>)
          }
        </ul>

        
        
        

      </header>
    </div>
  );
}

//component users
function Users() {
  
  const [users,setUsers] = useState([]);//useState initialized ,array type
  
  //userEffect to get server info
  useEffect(()=>{
    //fetch('https://jsonplaceholder.typicode.com/photos')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonData => setUsers(jsonData));
  },[])


  return(
    <div>
      <h1>Users' Info :</h1>
      <ul>
        {
          //users.map(el => <li style={{listStyleType:"decimal"}}>Title:{el.title}, Pic: <img src={el.thumbnailUrl}></img> </li>)
          
          users.map(element=><li style={{listStyleType:"upper-roman"}}>Name: {element.name}, Email:{element.email}, Phone:{element.phone}</li>)
        }
        
      </ul>
     
      
    </div>
  )
}


//state,component
function Counter() {

  
  
    const myComponentStyle={  //style
      border:"2px dotted blue",
      margin:"10px",
      padding:"10px",
      backgroundColor:"lightgray",
      // float:"left"
    };


  const[count,setCount]= useState(0);//initiate useState()
  const increaseStateController =()=>{
    //const newCount = count+1;
    //return setCount(newCount);
    return setCount(count+1);

  }



  return(
    <div style={myComponentStyle}>
      <h1>Count :{count}</h1>
      <button onMouseMove={increaseStateController}>increase</button>
      <br/>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  );
}



//component create
function MyComponent(props) {
  
  const myComponentStyle={
    border:"2px dash blue",
    margin:"10px",
    padding:"10px",
    backgroundColor:"lightgray",
    // float:"left"
  };
  

  const {country,location}=props.geo; //destructure .here obj copy by reference 
  //console.log(country,location);
  
  return(
    // <div style={myComponentStyle}>
    //   <h1 style={{color:"red"}}>Bangladesh</h1>
    //   <h2>South Asia</h2>
    // </div>
    
    <div style={myComponentStyle}>
    
      {/* <h1>country:{props.geo.country}</h1>
      <h3>location:{props.geo.location}</h3> */}

      <h1>country : {country}</h1>
      <h3>location : {location}</h3>
    </div>
    
  );
}


export default App;
