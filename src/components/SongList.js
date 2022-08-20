import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>Our song list</div>
        )
    }
}

//create an instance of the connect component and use state from the redux store
const mapStateToProps = (state) => {
    return {songs: state.songs}
}

export default connect(mapStateToProps)(SongList)