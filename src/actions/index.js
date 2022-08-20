//create an action creator to handle song selection and export it
export const selectSong = (song) => {
    //return an action as an object
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

