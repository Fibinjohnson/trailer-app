import React ,{useState,useEffect} from 'react'
import axios from "../axios"
import YouTube from "react-youtube"
import { urlKey } from '../Constants/Constant'

import "./Row-post.css"

function Rowpost(props) {
const [series,setSeries]=useState([]);
const [url,setUrl]=useState([]);
  useEffect(()=>{
    axios.get(props.URL).then((response)=>{console.log(response.data); setSeries(response.data.results);})
   },

  [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    }}
  const handleClick=(id)=>{
    console.log(id)
    axios.get(`/tv/${id}/videos?api_key=${urlKey}`).then((response)=>setUrl(response.data.results[0])).catch((err)=>console.log("no video on youtube"))
    axios.get(`/movie/${id}/videos?api_key=${urlKey}`).then((response)=>setUrl(response.data.results[0])).catch((err)=>console.log("no video on youtube"))
  }
  return (
  
    <div className='row'>
    <h2 id={props.title=="Action movies"?'movies':"series"} className='title'>{props.title} </h2>
    <div id='action' className='posters'>
    {series.map((obj)=>{ return(
      <img  onClick={()=>handleClick(obj.id)} className={props.isSmall?'smallPoster':"poster" }
  src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`}
  alt="" />)})}
 
    
 
     
    </div>
    {url && <YouTube videoId={url.key} opts={opts}/>}
    </div>
   
  
  )

}

export default Rowpost;

