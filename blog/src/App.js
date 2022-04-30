import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [제목, a] = useState(['진주  상대동 카페 이로움', '맛집추천', '리액트 독학']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>세이지의 개발 블로그</div>
      </div>
      <div className='list'>
        <h4> { 제목[0] } </h4>
        <p>4월 29일 발행</p>
      </div>
      <div className='list'>
        <h4> { 제목[1] } </h4>
        <p>4월 29일 발행</p>
      </div>
      <div className='list'>
        <h4> { 제목[2] } </h4>
        <p>4월 29일 발행</p>
      </div>

    </div>
  );
}

export default App;
