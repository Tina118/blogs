import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from 'container/Login';
import Posts from 'container/Posts';

/**
 * App
 * Main App Component 
 */
const App = () => {
  return (
    <BrowserRouter basename="blogs">
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
