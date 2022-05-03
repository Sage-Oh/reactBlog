/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목, 글제목변경] = useState(['진주  상대동 카페 이로움', '맛집추천', '리액트 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [word, setWord] = useState('');

  // function 모달(){
  //   if(modal==true){
  //     setModal(false)
  //   }else{
  //     setModal(true)
  //   }
  // };

  function 바꿔요(){
    let copy = [...제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
  };

  // function carrot(){

  //   let copy = [...따봉];
  //   copy[0] = 따봉[0]++
  //   따봉변경(copy)
    
  // }

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

      <button onClick={ 바꿔요 }>글수정</button>

      {/* <div className='list'>
        <h4 onClick={모달}> { 제목[0] } </h4>
        <span onClick={()=>{ 따봉변경(따봉++) }}>👍</span> {따봉} 
        <p>4월 29일 발행</p>
      </div>
      <div className='list'>
        <h4> { 제목[1] } </h4>
        <p>4월 29일 발행</p>
      </div>
      <div className='list'>
        <h4> { 제목[2] } </h4>
        <p>4월 29일 발행</p>
      </div> */}
        

      {
        제목.map(function(a,i){
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}> { a } 
                <span onClick={()=>{
                  let copy = [...따봉];
                  copy[i] = copy[i]+1
                  따봉변경(copy)
                }}>👍</span> {따봉[i]}
              </h4>
              <p>4월 29일 발행</p>
              <button onClick={ ()=>{
                let copy = [...제목];
                copy.splice(i, 1)
                글제목변경(copy);
              } }>삭제</button>
            </div>
          
          )
        })
      }
      
      <input onChange={ (e)=>{ setWord(e.target.value); console.log(word) } }/><button onClick={ ()=>{
        let copy = [...제목];
        copy.unshift(word);
        글제목변경(copy);
      } }>버튼</button>
        
      {
        modal == true ? <Modal color="yellow" 제목={제목} title={title} 바꿔요={바꿔요}/> : null
      }
    </div>
  );
};


function Modal(props){
  return(
    <div className='modal' style={{background: props.color}}>
      <h4>{props.제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.바꿔요}>글수정</button>
    </div>
  )
}


export default App;
