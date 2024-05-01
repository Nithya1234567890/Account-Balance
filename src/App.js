import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './Navbar';
import { ActionCreator } from './state';
import { bindActionCreators } from 'redux';


function App() {
  const dispatch=useDispatch();
  const {withdraw,deposit}=bindActionCreators(ActionCreator,dispatch);
  return (
    <div className="container1">
      <div className="top" style={{position:"absolute",top:"0",width:"100%"}}>
        <Navbar/>
      </div>
      <div className="box">
        <h1 className='my-5' style={{fontFamily:"cursive",fontSize:"2.5rem"}}>Deposit or Withdraw Money</h1>
        <div className="button mb-5">
        <div className="btn btn-primary mx-3 px-4" onClick={()=>{withdraw(100)}} style={{fontSize:"2rem"}}>-</div>
        <h2 style={{marginBottom:"0",marginTop:"9px"}}>Update Balanace</h2>
        <div className="btn btn-primary mx-3 px-4" onClick={()=>{deposit(100)}} style={{fontSize:"2rem"}}>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
