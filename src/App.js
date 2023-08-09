import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              {/* key is used to mount the new category , if u dont use it the end point will change but not the content */}
              <Route path='/' element={<News key='general' country='in' category='general' />} />
              <Route path='/business' element={<News key='business' country='in' category='business' />} />
              <Route path='/entertainment' element={<News key='entertainment' country='in' category='entertainment' />} />
              <Route path='/general' element={<News key='general' country='in' category='general' />} />
              <Route path='/health' element={<News key='health' country='in' category='health' />} />
              <Route path='/science' element={<News key='science' country='in' category='science' />} />
              <Route path='/sports' element={<News key='sports' country='in' category='sports' />} />
              <Route path='/technology' element={<News key='technology' country='in' category='technology' />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

