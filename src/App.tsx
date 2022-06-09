import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './page/Main';
import PostShow from './page/PostShow';



function App() {

  

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/post/:id' element={<PostShow />} />
              <Route  path="/" element={<Main />}>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
