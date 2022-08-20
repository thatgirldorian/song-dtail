// combine the reducers
import { combineReducers } from 'redux'

//write out both of the reducers we need 
const songsReducer = () => {
    return [
            {title: "Show Me Off", duration: "3:17", artist: "Asa", genre: "Afrobeats/Rnb"},
            {title: "Obsessed", duration: "2:44", artist: "Fave", genre: "Afrobeats/Alté/R&B"},
            {title: "About Damn Time", duration: "3:11", artist: "Lizzo", genre: "Pop/Rock"},
            {title: "Obodo", duration: "3:09", artist: "Cill", genre: "Alternative/Soul"},
            {title: "Lost Time", duration: "3:52", artist: "LÉON", genre: "Pop/Rock"},
            {title: "Transits", duration: "2:33", artist: "Tyra Chantey", genre: "Pop/RnB"},
            {title: "Peru", duration: "3:07", artist: "Fireboy DML", genre: "Afrobeats/RnB"}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})