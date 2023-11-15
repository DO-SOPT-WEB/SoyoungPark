import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from '../pages/PostList';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostList />}>
          <Route path="/post/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
