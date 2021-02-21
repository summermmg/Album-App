import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import FileUploadScreen from './screens/FileUploadScreen'
import MyAlbumScreen from './screens/MyAlbumScreen'
import SampleAlbumScreen from './screens/SampleAlbumScreen'



const App = () => {
  return (
    <Router>
      <Header/>

      <main>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/samples" component={SampleAlbumScreen} />
        <Route path="/myalbum" component={MyAlbumScreen} />
        <Route path="/fileupload" component={FileUploadScreen} />
      </main>
    </Router>  
  )
}
export default App;
