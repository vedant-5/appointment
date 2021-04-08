import React,{useState} from "react";
import fire from "../fire";
import CalendarView from "./CalenderView";
import {InputGroup, FormControl} from "react-bootstrap";


import Container from '@material-ui/core/Container';




function Input(){

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
     
    const handleSubmit = () => {
        const messageRef = fire.database().ref('messages');
        const input = {
            title: text,
            description: description,
        }
        messageRef.push(input)
        console.log(text,description);
        setText("");
    } 
    
    //"now < 1620412200000",  // 2021-5-8
    //"now < 1620412200000",  // 2021-5-8

    return (
        <div style={{marginTop:"20px"}}>
            <Container style={{width:"90%", margin:"auto"}}>
            <div>
                <div>
                    <p style={{marginBottom:"5px"}}>Enter Details</p>
                    <InputGroup style={{marginTop:"5px"}} className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Enter Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        onChange={(e) => {setText(e.target.value)}}
                        placeholder="Enter name"
                        aria-label="Name"
                        />
                    </InputGroup>
                    
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={(e) => {setDescription(e.target.value)}} as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </div>
                {/* <p>Enter Username</p>
                <input style={{}} type="text" onChange={(e) => {setText(e.target.value)}} id="inputText"/> */}
            </div>
            <br/>
            <CalendarView/>
            <button onClick={handleSubmit}>Submit</button>
            </Container>
        </div>
      );
}
 
export default Input;