import logo from './logo.svg';
import './App.css';
import MobileCard from './MobileCard';
import mobile from './mobile.json'
import Form from './Form';
import Fetch from './Fetch';
import MultipleReturn from './MultipleReturn';
import UseReducer from './UseReducer';

function App() {

  return (
    <div className="App">
      {/* {mobile.map((ele)=>{
        return <MobileCard image={ele.image} name={ele.name} price={ele.price}/>
      })} */}
      {/* <Form/> */}
        {/* <Fetch/> */}
        {/* <MultipleReturn/> */}
        <UseReducer />
    </div>
  );
}

export default App;
