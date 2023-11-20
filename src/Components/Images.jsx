import { Link } from 'react-router-dom'
import style from"./style.module.css"
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';


import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = () => {

    const [data, setData] = useState([]);
    const [query,setQuery] = useState(" "); // lamborgini
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] =  useState(true);
    
    const client_id="7IBLOmDR0Imd0fvr1iR4aCx8kHr8oZkhpWBtZKHV1UA";
    const fetchUrl =`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;
  
    const fetchImages =() =>{
        axios.get(fetchUrl,{
            headers:{},
        })
        .then((response)=>{
            setData([...data, ...response.data.results]);
        })
        .catch((error)=>{
            console.log(error);
        });
        setPage(page + 1);
    };

    useEffect(()=>{
        fetchImages();
    },[query]);

    const searchImages =(e)=>{
        if(e.keyCode === 13){
            setQuery(e.target.value);
            setData([]);
        }
    }
    return (
        
        <div className={style.searchpage}>

        <div className={style.searchpage_header}>
            <Link to="/">
            <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' /> 
            </Link>
            
           <div className={style.searchpage_headerbody}>
            <div className={style.adjust}>
            < SearchIcon  className={style.searchicon}/>
            < input type="text" onKeyDown={(e) => searchImages(e)}   placeholder="search images"/>
            <MicIcon/>    
            </div>

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
                <Link to="/videos">videos</Link>
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
 <InfiniteScroll
dataLength={data.length} //This is important field to render the next data
next={fetchImages}
hasMore={hasMore}
// loader={<h4>Loading...</h4>}
endMessage={
  <p style={{ textAlign: 'center' }}>
    <b>Yay! You have seen it all</b>
  </p>
}
>
    <div className={style.card_list}>
    {data.map((data, key)=>(
        <div className={style.container} key={key}>
            <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img src ={data.urls.small} className={style.image} alt={data.alt_description} />
            </a>
             <h4>photo by {data.user.name}</h4>
        </div>
    ))}
    </div>
</InfiniteScroll> 

</div>

  );
}

export default Images
