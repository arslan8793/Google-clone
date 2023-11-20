import React, { useState } from 'react'
import style from"./style.module.css"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {actionTypes} from './Reducer';
import { useOnKeyButton } from './useOnKeyButton';


  const Search = ({hidebuttons}) => {

  const navigator=useNavigate();

  const [enter,setEnter]= useState('')

  var kismi=" ";

  const [{},dispatch]=useStateValue();

  const [input, setInput] = useState(" ");

  const submitHandler=()=>{
    setEnter([...enter,input])
    setEnter('')
    dispatch({
    type:actionTypes.SET_SEARCH_TERM,
    term:input
  })
  if(input!=kismi)
  {
    navigator("/searchpage")
  }
  console.log(input)
}
var inputContent=(e)=>{
  setInput(e.target.value)
}

  const search=(e)=>{
    e.preventDefault();
    dispatch({
      type :actionTypes.SET_SEARCH_TERM,
      term:input
    })
    if(input!=kismi)
    {
    navigator("/searchpage")
    }
  }
  useOnKeyButton(submitHandler,'Enter')
  useOnKeyButton(()=>setInput(''),'Delete')
  return (
    <div>
        <div className={style.search}>
         < SearchIcon  className={style.searchicon}/>
       <input type="text"  placeholder="Search Google Or Type a URL "  value={input} onChange={inputContent} />
       <MicIcon/>
    
    </div>
   {
    !hidebuttons ?(<div className={style.button}>
     <Button type='submit' onClick={search} variant="outlined" className={style.link}>Google search </Button>
  
     <Button type='submit' variant="outlined" className={style.link}>i'm feeling lucky</Button>
  
     </div>) :(
      <div className={style.search_button} style={{display:'none'}}>
      <Button type='submit' onClick={search} variant="outlined" className={style.link}>Google search </Button>
      </div>
     )
   }

    </div>

    
  )
}

export default Search
