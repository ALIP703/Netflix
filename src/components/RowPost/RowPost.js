import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axois'
import YouTube from 'react-youtube'
import ReactPlayer from "react-player"
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch((err) => {
            alert("Network err" + err)
        })
    }, []);
    // const opts = {
        // height: '390',
        // width: '100%',
        // playerVars: {
            // https://developers.google.com/youtube/player_parameters
            // autoplay: 1,
        // }
    // };
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
                console.log("hlo");
                console.log(response.data.results[0]);
            }
            else {
                console.log('no video');
            }
        })
    }
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">
                {
                    movies.map((obj) =>
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                    )
                }
            </div>
            {/*  { urlId &&  <YouTube opts={opts} videoId="J2VaYd08p-c" />  } */ }
            { urlId && <ReactPlayer width='100%' playing='true' url={`https://www.youtube.com/watch?v=${urlId.key}`} />}
        </div>
    )
}

export default RowPost