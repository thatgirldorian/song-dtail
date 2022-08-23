import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetail'
import '../App.css'

const App = () => {

  return (
    <div>
      <h3 className="title">songdtail.</h3>
      <p className="heading">a couple of my current favorite songs.</p>
      <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default App