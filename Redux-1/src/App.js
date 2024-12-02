
import './App.css';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import {useSelector} from 'react-redux';

function App() {

let inputRef = useRef();  
let dispatch = useDispatch();
let storeObj = useSelector((store)=>{
  return store;
});

  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button onClick={()=>{
        dispatch({type:"addFruits",data: inputRef.current.value});

      }}>Add Fruits</button>
      <button onClick={()=>{
        dispatch({type:"addFlowers",data:inputRef.current.value});

      }}>Add Flowers</button>
      <button onClick={()=>{
        dispatch({type:"addAnimals",data:inputRef.current.value});

      }}>Add Animals</button>
      <br></br>
      <h2>Fruits:{storeObj.fruits.join()}</h2>
      <h2>Flowers:{storeObj.flowers.join()}</h2>
      <h2>Animals:{storeObj.animals.join()}</h2>
    </div>
  );
}

export default App;
