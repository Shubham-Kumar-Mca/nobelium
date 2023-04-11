import './App.css';
import InputForm from './Components/InputForm/InputForm';
import LiveDataShow from './Components/LiveDataShow/LiveDataShow';
import { useState } from "react"

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [userData, setUserData] = useState([])

  const LiveData = (value) => {
    setUserInfo(value)
    
  }
  console.log("userData is", userData);

  const handeldelet =  (index) =>{
    const filteredUesr = userData.filter((_,ind)=> ind !== index)
    setUserData(filteredUesr)
  }
  return (
    <div>
      <div className='container'>
        <InputForm LiveData={LiveData} userData = {userData} setUserData = {setUserData}/>
        <LiveDataShow userInfo={userInfo} />
      </div>
      <div className='tabelConainer'>
        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((data,index)=>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.full_Name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td onClick={()=>handeldelet(index)}>❌</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
