import { useState } from "react";
import "./App.css";

const AboutJohn = (props) => {
  const firstName = props.name;
  const lastName = props.lastName;
  const age = props.age;
  const address = props.address;

  return (
    <>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name : {lastName}</h3>
      <h3>Age : {age}</h3>
      <h3>Address : {address}</h3>
    </>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={()=> setCounter((prevCount)=>prevCount -1)}>-</button>
        <h1>{counter}</h1>
      <button onClick={() => setCounter((addCount)=>addCount +1)}>+</button>
    </>
  )
}

const App = () => {
  const name = "Rakesh Rai";
  const isName = true;
  return (
    <div className="App">
      <Counter/>
      <h1>Hi! I'm {isName ? name : "there is no name"}</h1>
      <AboutJohn
        name={"Rakesh"}
        LastName={"Rai"}
        age={2 + 2}
        address={"Dharan"}
      />
    </div>
  );
};

export default App;
