import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from 'container/Login';
import Posts from 'container/Posts';
import DetailedPost from 'container/DetailedPost';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="posts" element={<Posts />}></Route>
      <Route path="posts/:id" element={<DetailedPost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
