import React from 'react'
import { Link } from 'react-router-dom'
import style from"./style.module.css"
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from './Search';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import VideocamIcon from '@mui/icons-material/Videocam';


const Searchpage = () => {
    
    const[{term}]=useStateValue();

    const {data} = useGoogleSearch(term)
    console.log(data)
  return (
    <div className={style.searchpage}>

        <div className={style.searchpage_header}>
            <Link to="/">
            <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' /> 
            </Link>

            <div className={style.searchpage_headerbody}>
                <Search hidebuttons/>

               <div className={style.searchpage_optionleft}>

               <div className={style.searchpage_option}>
                    <SearchIcon/>
                    <Link to="/all">All</Link>
                </div>
        
                <div className={style.searchpage_option}>
                    <DescriptionIcon/>
                    <Link to="/news">News</Link>
                </div>

                <div className={style.searchpage_option}>
                   <ImageIcon/>
                   <Link to="/images">Image</Link>
               </div>

               <div className={style.searchpage_option}>
                <VideocamIcon/>
                <Link to="/videos">Videos</Link>
               </div>

               <div className={style.searchpage_option}>
                <RoomIcon/>
                <Link to="/maps">Maps</Link>
               </div>

               <div className={style.searchpage_option}>
                <MoreVertIcon/>
                <Link to="/more">More</Link>
               </div>

            <div className={style.searchpage_optionright}>

                <div className={style.searchpage_option}>
                 <Link to="/settings" >Settings</Link>
                </div>

                <div className={style.searchpage_option}>
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
        </div>
     </div>
     </div>
{
    term && (
     <div className={style.searchpage_results}>

         <p className={style.searchpage_resultcount}>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for{term}
         </p>

         {data?.items.map((item)=>(
          <div className={style.searchpage_result}>
          <a href={item.link} className={style.searchpage_resultlink}>

           {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
          <img src={item.pagemap?.cse_image[0]?.src}  className={style.searchpage_resultimage} alt=""/>
           )}

          {item.displayLink}
          </a>

          <a href={item.link} className={style.searchpage_resulttitle}>
              <h2>{item.title}</h2>
          </a>

          <p className={style.searchpage_description}>{item.snippet}</p>
       </div>
         ))
}

        
     </div>
    )}

    </div>
  )
}

export default Searchpage
