
import React, { useState } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { Routes, Route, Link} from 'react-router-dom'
import { Button, Navbar, Container, Nav, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function App() {
    let [img1, img2] = useState('');
    console.log(img1)

    
    const [text, setText] = useState("퍼즐을 맞춰보세요!!");
      
    const set = () => {
        setText("정답입니다!!");
    };
    return (
        
        <>
        <Routes>
        <Route path='/' element={
        <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        <input type='url' style={{alignItems: 'center', margin : 'auto', display : 'flex', justifyContent : 'center'}} 
        onChange={(e)=>{ img2(e.target.value)}}></input>
        <Link to="/puzzle">
        <Button 
        color="secondary"
        variant="contained">
  	    퍼즐
        </Button>
</Link>
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
            /></div>}></Route>
        </Routes>
        </>
    );
}

        

  
export default App;