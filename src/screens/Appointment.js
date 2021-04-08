import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import image from "../components/business-man.svg";

import CalendarView from "../components/CalenderView";
import Input from "../components/Input";

const Appointment = () => {
    return ( 
        <> 
            <Container style={{marginTop:"20px"}} fixed>
                <Chip>
                    <img src={image} alt="Person" style={{width:"40px", height:"40px",float:"left", margin:"5px 15px 0 -18px",borderRadius:"50%", border:"1px solid black"}}/>
                    Book Your Appointment
                </Chip>
               
                <Input/>
                
            </Container>
                
        </>
     );
}
 
export default Appointment;

const Chip = styled.div`
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #b8ebff;
    width: 100%;
    box-shadow: -1px 4px 7px 0px rgba(0,0,0,0.11);
`
