
import React, { ChangeEvent, DragEvent, useState, useCallback, navigate, useRef } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { Routes, Route, Link} from 'react-router-dom'
import { Button, Navbar, Container, Nav, Row, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { io } from "socket.io-client";


const socket = io('http://localhost:8080/')

function App() {

  const socket = io('http://localhost:8080/')

  const emitUrl = (imgUrl) => {
    socket.emit('유알엘이 갑니다', imgUrl)
}
  const emitMsg = (msgData) => {
    socket.emit('완성이용', msgData)
  }

    socket.on('짠', function(data){
        img2(data);
    });

    socket.on('우하하', function(){
        alert("퍼즐 끝");
      //추가했는데 삭제해야할듯?
  const emitPuzzlePiece = (movePuzzle) => {
    socket.emit('퍼즐이 움직입니다', movePuzzle)
  }

} )
  async function postUser() {
    try {
    // POST 요청은 body에 실어 보냄
      await axios.post('http://localhost:3000/test/post', {
          firstName: 'React',
          lastName: 'Kim'
      });
    } catch (e) {
      console.error(e);
    }
  }
  const f1=()=>{
  axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(function (response){
    let testimg = response;
    console.log(response)
  })}
  // const f1 = () => {
  //   axios.get('http://localhost:3000/test/get')
  //   .then((res) => {
  //     let { data } = res;
  //     // let { member } = data;
      
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
      
  //   });
  // }
    let [완료, 완료변경] = useState(0);

    let [img1, img2] = useState('');
    console.log(img1)
    const [text, setText] = useState("퍼즐을 맞춰보세요!!");
      
    const set = () => {
        setText("정답입니다!!");
        let msgData;
        msgData = text;
        emitMsg(msgData);
    };
    return (
        
        <>
        <Routes>
        <Route path='/' element={
        <div>
        <input type='text' style={{alignItems: 'center', margin : 'auto', display : 'flex', justifyContent : 'center'}} 
        onChange={(e)=>{ img2(e.target.value); emitUrl(e.target.value)}}></input>
        
        <div>
        <h2 className="tag">{text}</h2>
        <JigsawPuzzle
                imageSrc={img1} 
                rows={2}
                columns={2}
                onSolved={set}
                className="jigsaw-puzzle"
            />
        </div>
        {/* <Link to="/puzzle">
        <Button 
        color="secondary"
        variant="contained">
  	    퍼즐
        </Button>
        </Link> */}
        </div>}>
                
        </Route>
        <Route path='/puzzle' element={<div>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={img1}
                rows={2}
                columns={2}
                onSolved={set}
                className="jigsaw-puzzle"
                onMouseUp={(args)=>{console.log(...args)}}
            /></div>}></Route>
          
            <Route path='/test' element={ 
                <div>
                <button onClick={f1}>click1!</button>
                <JigsawPuzzle
                imageSrc={img1}
                rows={2}
                columns={2}
                onSolved={set}
                className="jigsaw-puzzle"
            />
                               </div>
              }>
            </Route>
          
        </Routes>
        </>
    );
}

        

  
export default App;