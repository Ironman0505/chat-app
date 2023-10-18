import axios from 'axios'
import {useForm} from 'react-hook-form'
import Red from './components/Red';
import {Route,Routes} from 'react-router-dom'
import Params from './components/Params';
import Sockets from './components/Sockets';
import WebSoc from './components/WebSoc';
function App() {


  // const fn=async ()=>{
  //  let res=await axios.get("http://localhost:3333/test");
  //  let data=res.data.msg;
  //  console.log(data);
  // }
 
  const {register,handleSubmit,formState:{errors}}=useForm();

    // const onFormSubmit =(obj)=>{
    //   console.log(obj);
    // } 
  return (
    <div className="App">
    
    <WebSoc />


    {/* <Red/> */}

    {/* <form onSubmit={handleSubmit(onFormSubmit)} >  
      <input type='text'  {...register("name",{required:true})} />
      {errors.name?.type==='required' && <h2>Field is needed</h2>}

      <button type='submit' >Submit</button>
    </form> */}
    {/* <button className='btn btn-secondary m-3' onClick={fn}  >Click</button> */}

    

        {/* <Routes>
        <Route path='/' element={<NavPage/>}  />
        <Route path='/otp' element={<Otp/>}  />
        </Routes> */}
       
       {/* <h3>Hello</h3>
       <Routes>


        <Route  path='/views/:pid' element={ <Params/> } />


       </Routes> */}

       {/* <Sockets /> */}


    </div>
  );
}

export default App;
