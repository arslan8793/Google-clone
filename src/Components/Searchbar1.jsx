import React from 'react'
import { Link } from 'react-router-dom'
import style from"./style.module.css"
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';

 class Searchbar1 extends React.Component{
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
        
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render()
     {
        
        return (

            <div className={style.searchpage}>

            <div className={style.searchpage_header}>
                <Link to="/">
                <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' /> 
                </Link>
    
                <div className={style.searchpage_headerbody}>

                <h2  style={{textAlign:"center"}}></h2>


            <div className={style.searchbar1}>
            < SearchIcon  className={style.searchicon}/>
            <form onSubmit={this.handleSubmit} className={style.form}>
            <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search videos"/>
            </form>
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

            {/* <> */}
            {/* <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div> */}
            {/* </> */}

            </div>
        )
    }
}
export default Searchbar1;