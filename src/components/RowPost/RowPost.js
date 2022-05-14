import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import axios from  '../../axois'
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch((err)=>{
            alert("Network err"+err)
        })
    }, []);
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">
                {
                    movies.map((obj)=>
                        <img className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                    )
                }
            </div>
        </div>
    )
}

export default RowPost