
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Firstname,Lastname,Gender,Age,Profesion } from './store/action/action';
function App() {

  const firstName = useSelector((state)=>state.FirstName)
  const lastName=useSelector((state)=>state.LastName)
  const gender=useSelector((state)=>state.Gender)
  const age=useSelector((state)=>state.Age)
  const profesion=useSelector((state)=>state.Profesion)
  
  const dispatch = useDispatch()


  const [myfirstname, setfirstname] =  useState()
  const [mylastname, setlastname] =  useState()
  const [mygneder, setgender] =  useState()
  const [myage, setage] =  useState()
  const [myprofesion, setprofesion] =  useState()
  return (
    <div className="App">
      <div className=' '> My Information
      <div className="">
      <div className='-ml-12'> 
       <span>firtname :</span> <input className=" border-blue-500 border-2 rounded-2xl p-2 w-64   " value={myfirstname} onChange={(e)=>setfirstname(e.target.value)}/>
      
        <button className="bg-blue-600 m-4 h-10 w-24 rounded-2xl" onClick={()=>dispatch(Firstname(myfirstname))}>Done</button>
      </div> 
      
      <div className='-ml-12'>
        <span>lastname :</span> <input className= " border-blue-500 border-2 rounded-2xl p-2 w-64   "  value={mylastname} onChange={(e)=>setlastname(e.target.value)}/>
        <button className="bg-blue-600 m-4 h-10 w-24 rounded-2xl" onClick={()=>dispatch(Lastname(mylastname))}>Done</button>
      </div> 
       
      <div className='-ml-10'>  
        <span>gender:</span> <input className=" border-blue-500 border-2 rounded-2xl p-2 w-64   "  value={mygneder} onChange={(e)=>setgender(e.target.value)}/>
        <button className="bg-blue-600 m-4 h-10 w-24 rounded-2xl"onClick={()=>dispatch(Gender(mygneder))}>Done</button>
      </div>  
        
      <div className='-ml-6'>
        <span>age:</span> <input className=" border-blue-500 border-2 rounded-2xl p-2 w-64   " value={myage} onChange={(e)=>setage(e.target.value)}/>
        <button className="bg-blue-600 m-4 h-10 w-24 rounded-2xl" onClick={()=>dispatch(Age(myage))}>Done</button>
      </div> 
       
      <div className='-ml-14'>
        <span>profesion:</span> <input className=" border-blue-500 border-2 rounded-2xl p-2 w-64   "  value={myprofesion} onChange={(e)=>setprofesion(e.target.value)}/>
        <button className="bg-blue-600 m-4 h-10 w-24 rounded-2xl" onClick={()=>dispatch(Profesion(myprofesion))}>Done</button>
      </div> 
      <div>
        <div className='text-4xl'>
         My Information
         </div>
         <div>
          <div className=' pr-10 text-xl'>FirstName:{firstName}</div>
          <div className='text-xl'>LastName:{lastName}</div>
          <div className='pr-16 text-xl'>gender:{gender}</div>
          <div className='pr-24 text-xl'>age:{age}</div>
          <div className='pr-24 text-xl'>profesion:{profesion}</div>
         </div>
      </div>
        
        </div>
      
    
      </div>
      
    </div>
  );
}

export default App;
