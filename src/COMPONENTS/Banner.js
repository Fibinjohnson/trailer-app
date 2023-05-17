
import React from 'react'
import "./Banner.css"
import { useEffect ,useState} from 'react'
import axios from '../axios';
import { urlKey ,imgUrl} from '../Constants/Constant';
import Youtube from "react-youtube"


function Banner() {
  const [movie,setMovie]=useState([]); 
  const [url,setUrl]=useState([])
  const x=Math.floor(Math.random()*20)+1
  
  useEffect(()=>{
   
    axios.get(`trending/all/day?api_key=${urlKey}`).then((response)=>{setMovie(response.data.results[x]);console.log(movie.id)})
  },[])
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    }}
    const handleClick=(id)=>{
      axios.get(`/movie/${id}/videos?api_key=${urlKey}`).then((response)=>{setUrl(response.data.results[0]);console.log(url.key)}).catch((err)=>console.log("no video on youtube"))
    }
  
  return (
    <div>
    <div  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  }} className='banner'>

      <div className='content'>
        <h1 className='title'>
          {movie.title}
        </h1>
        <div className='banner-buttons'>
            <a href='#youtube' style={{textDecoration:"none"}}><button onClick={()=>{handleClick(movie.id)}} className='button'>Play</button></a>
            <button className='button'>My list</button>
        </div>
       
        <h1 className='description'>{movie.overview}</h1>
      </div>
     
      <div className='fade'></div>
      
 </div>
 <div id="youtube" className='youtube'><Youtube videoId={url.key} opts={opts}/></div>
 </div>
 
  
  )
}

export default Banner
