import { useCallback, useContext, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { AuthContext } from './Context/AuthContextProvider';
import SingleUserData from './Components/SingleUserData';
import DisplayAllData from './Components/DisplayAllData';

function App() {
  const { dispatch } = useContext(AuthContext)

  const handelAPI = useCallback(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      dispatch({ type: "DATA", payload: res.data })
    })
  },[dispatch])

  useEffect(() => {
    handelAPI()
  }, [handelAPI])

  return (
    <div className="App">
      <div>
        <h2>Post List</h2>
        <DisplayAllData />
      </div>
      <div>
        <h2>Post Details</h2>
        <SingleUserData />
      </div>
    </div>
  );
}

export default App;
