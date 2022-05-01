/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  

  let [제목, 글제목변경] = useState(['진주  상대동 카페 이로움', '맛집추천', '리액트 독학']);
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <div>세이지의 개발 블로그</div>
      </div>

      <button onClick={ ()=>{
          let copy = [...제목];
          copy.sort();
          글제목변경(copy);
        }
      }>가나다순정렬</button>

      <button onClick={ ()=>{
        let copy = [...제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
        
        } }>글수정</button>

      <div className='list'>
        <h4> { 제목[0] } <span onClick={()=>{ 따봉변경(따봉++) }}>👍</span> {따봉} </h4>
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
      
      <Banana></Banana>
      
    </div>
  );
};

function Banana(){
  return(
    <div>
      <h3>블로그 방문자수 통계조회</h3>
      <input type="text" value="입력하세요"/>
      <button>버튼</button>
    </div>
  );
};



export default App;
