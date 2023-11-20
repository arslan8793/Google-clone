import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import style from "./style.module.css"
import { Avatar } from '@mui/material';
import Search from './Search';
const Home = () => {
  return (
    <div className={style.home}>

      <div className={style.home_header}>

        <div className={style.home_headerleft}>
          <p>About</p>
          <p>Store</p>

        </div>

        <div className={style.home_headerright}>
          <p>gmail</p>
          <p>images</p>
          <AppsIcon/>
         <p className={style.avatar}> <Avatar/></p>
        </div>

      </div>

      <div className={style.google}>
          <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={92} width={272}/>

          <div className={style.searchhome}>
          <Search />
         </div>
      </div> 
    </div>
  )
}

export default Home
