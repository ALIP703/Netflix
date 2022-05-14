import {API_KEY} from './constants/constants'
export const original = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const animation = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`
export const adventure=`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=12&with_watch_monetization_types=flatrate`