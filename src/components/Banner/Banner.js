import React, { useEffect, useState } from 'react'
import axios from '../../axois'
import {API_KEY,imageUrl} from '../../constants/constants'
// import {baseUrl} from '../../constants/constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState();    
    useEffect(()=>{
        console.log(API_KEY);
        axios.get('/trending/all/week?api_key='+API_KEY).then((resposnse)=>{
            console.log(resposnse.data.results[0]);
            setMovie(resposnse.data.results[19])            
        })
    },[])
    return (
        <div className='banner' 
        style={{backgroundImage:`URL(${movie ?imageUrl+movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                
                <div className="banner_buttons">
                    <button className="button">play</button>
                    <button className="button">My list</button>

                </div>
                <h1 className="discription">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottum">

            </div>
        </div>
    )
}

export default Banner