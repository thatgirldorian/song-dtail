import React, { Component } from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    //set some catcher/error handling for when there is no song selected on load
    if (!song) {
        return <div>Select a song!</div>
    }

    return (
        <div>
            <h3>Song Facts</h3>
            <p>{song.title}</p>
            <p>{song.duration}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
        </div>
    )
}

//use the connect component 
const mapStateToProps = (state) => {
    return { song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);