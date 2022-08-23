import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css'


const SongDetail = ({ song }) => {
    //set some catcher/error handling for when there is no song selected on load
    if (!song) {
        return <div className="pointer-message">Select a song!</div>
    }

    return (
        <div className="details">
            <h3>Song Facts</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
            <p>Artist: {song.artist}</p>
            <p>Genre: {song.genre}</p>
        </div>
    )
}

//use the connect component 
const mapStateToProps = (state) => {
    return { song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);