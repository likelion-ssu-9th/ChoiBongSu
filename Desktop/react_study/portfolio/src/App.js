import React, { useState } from 'react';
import './App.css';

function App() {

  let [web, changedWeb] = useState(['처음 만든 웹', '두 번째 웹', '세 번째 웹']);
  let [like, changeLike] = useState(0,0,0);
  let [modal,changedModal] = useState(false);
  let [num,changednum] = useState(-1);
  let [input, changedinput] = useState('');
  
  function 글변경() {
    let newArray = [...web];
    newArray[0] = '첫 번째 웹';
    changedWeb(newArray);
  }

  function 글추가() {
    let newArray = [...web]
    newArray.unshift(input)
    changedWeb(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        개발해서 먹고살고싶다.
    </div>
      {web.map(function(name, i){
        return (
        <ul  onClick={()=>changednum(i)} className="list" key={i}>
          <h3>{ name } <span onClick={ ()=>{ changeLike(like[i] + 1)}}>👍</span> { like } </h3>
          <p>2020.11.02</p>
          <button onClick={ 글변경 }> 버튼 </button>
          <hr/>
        </ul>
      )})}
    <button onClick={()=>changedModal(!modal)}>열고닫기</button>
      {
        modal === true
        ? <Modal web={web} num={num} />
        : null
      }
    <div className="publish">
      <input onChange={ (e)=>{changedinput(e.target.value)}} />
      <button onClick={  글추가 }>저장</button>
    </div>
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
    <h2>{props.web[props.num]}</h2>
    <p>날씨</p>
    <p>상세내용</p>
  </div>
  );
}

export default App;
