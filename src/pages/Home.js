import React from 'react';
import testImg from '../asset/img/test.jpg';

export const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>라우터 실습을 위하여 제작</p>
      <img width={100} height={200} src={testImg} alt='testImg' />
    </div>
  );
};

export default Home;