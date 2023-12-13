import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle,setPrinciple]=useState(0);
  const [interest,setinterest]=useState(0);
  const [year,setYear]=useState(0);
  const [result,setResult]=useState(0)
  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isInterest,setIsInterest] =useState(true)
  const [isYear,setIsYear] =useState(true)


  const calculateInterest=(e)=>{
    e.preventDefault();
    const result = (principle * interest * year)/100;

    setResult(result)
  }
  const handleReset =()=>{
    setPrinciple(0);
    setinterest(0);
    setYear(0);
    setResult(0);
  }
  const validate =(e)=> {
    console.log(e.target);
    const {name,value} =e.target;
    if (name ==='principlevalue') {
      setPrinciple(value);
      let res =(!!value.match(/^[0-9]+$/));
      if(res === true){
        setIsPrinciple(true)
      }
      else{
        setIsPrinciple(false)
      }
    }
    else if(name ==='interestfield'){
      setinterest(value);
      let res =(!!value.match(/^[0-9]+$/));
      if(res === true){
        setIsInterest(true)
      }
      else{
        setIsInterest(false)


      }
    }
    else if(name ==='totalyear'){
      setYear(value);let res =(!!value.match(/^[0-9]+$/));
      if(res === true){
        setIsYear(true)
      }
      else{
        setIsYear(false)
      }


      
    }
  }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:"90vh"}}>
      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
    <h1>Simple interest</h1>
    <p>Calculate your simple interest easily</p>
    <div style={{height:"150px"}} className=' flex-column bg-warning mt-3 rounded d-flex justify-content-center align-items-center '>
      <h2>&#8377;{result}</h2>
      <p>Total simple interest</p>
    </div>
    <form action="" className='mt-3' onSubmit={calculateInterest}>

    <TextField className='w-100' id="outlined-basic" label="&#8377; Principle Amount" variant="outlined" 
    value={principle}
    name="principlevalue"
    onChange={(e)=> validate(e)} />
    {
      !isPrinciple &&
      <div>
        <p className='text-danger'>Invalid input</p>
      </div>
    }

    <TextField className='w-100 mt-2' id="outlined-basic" label="Rate of interest (pa) %" variant="outlined"
    name='interestfield'
    value={interest}
    onChange={(e)=>validate(e)} />
    {
      !isInterest &&
      <div>
        <p className='text-danger'>Invalid input</p>
      </div>
    }
    
    
    <TextField className='w-100 mt-2' id="outlined-basic" label="Year(yr)" variant="outlined" 
    name='totalyear'
    value={year}
    onChange={(e)=>validate(e)} />
    {
      !isYear &&
      <div>
        <p className='text-danger'>Invalid input</p>
      </div>
    }
   
    <Stack direction="row" spacing={2} className='mt-5'>
      <Button disabled={isPrinciple && isInterest && isYear?false:true} variant='contained' className='bg-success' style={{height:'50px',width:'200px'}} type='submt'>Calculate</Button>
      <Button variant='contained' style={{height:'50px',width:'200px',color:"blue"}} className='bg-light'onClick={handleReset}>Reset</Button>
    </Stack>
    </form>

    
      
    </div>
    </div>
    
    </>
   
  );
}

export default App;
