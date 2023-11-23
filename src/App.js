import { useEffect, useState } from "react";
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

  useEffect(() => {
    alert("You have change the value!" + counter);
  }, [counter]);
  return (
    <>
      <h1> Counter Number</h1>
      <p>This is the code to count the number.</p>
      <h1 className="App-Count-h1">{counter}</h1>
      <div className="Button-background">
      <button
        className="Button-count-danger Button-margin"
        onClick={() => setCounter((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <button
        className="Button-count-primary Button-margin"
        onClick={() => setCounter((addCount) => addCount + 1)}
      >
        +
      </button>
      </div>

    </>
  );
};

const App = () => {
  const name = "Rakesh Rai";
  const isName = true;
  return (
    <>
      <div className="App-row">
        <div className="App">
          <h1>Hi! I'm {isName ? name : "there is no name"}</h1>
          <AboutJohn
            name={"Rakesh"}
            LastName={"Rai"}
            age={2 + 2}
            address={"Dharan"}
          />
          <div className="App-inner">
            Myself {name} just a test to learn more about this code
            <p> Here we go with the new forces and deal with the custom deals just a text to fill up the text and test is this really working.</p> 
          </div>
        </div>
        <div className="App-1">
          <Counter />
        </div>
      </div>
      <div className="App-row">
      <div className="Dash-1">
          <p className="h1-dash">Custom Dash</p>
          <p className="P-dash"> Just a custom dash to look at the works how is it working and just to look at the gradeient screen how it looks</p>
        </div>
        <div className="Dash-2">
        <p className="h1-dash">Custom Dash</p>
          <p className="P-dash"> Just a custom dash to look at the works how is it working and just to look at the gradeient screen how it looks</p>
        </div>
        <div className="Dash-3">
        <p className="h1-dash">Custom Dash</p>
          <p className="P-dash"> Just a custom dash to look at the works how is it working and just to look at the gradeient screen how it looks</p>
        </div>
      </div>
      <div className="footer">
        <p>copyright : Rakesh Rai</p>
      </div>
    </>
  );
};

export default App;
