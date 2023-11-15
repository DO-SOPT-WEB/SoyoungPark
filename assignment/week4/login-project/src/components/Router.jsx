import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import MyPage from '../pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
