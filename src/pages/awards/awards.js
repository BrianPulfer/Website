import React from 'react';

import {Image, Row, Col} from "react-bootstrap";

import BPTitle from "../../components/title/BPTitle";
import BPParagraph from "../../components/paragraph/BPParagraph";

import SWISS_ENG from "./img/swisseng21.jpeg"; 
import "./awards.css";

class Awards extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"awards-container"}>
                <div className={"award"}>
                    <Row>
                        <Col className={"text-center col-8 offset-2"}>
                            <Image src={SWISS_ENG} className={"award-img"} fluid/>
                        </Col>
                    </Row>
                    <BPTitle text={"Swiss Engineering Award (2022)"}/>
                    <BPParagraph size={"20px"} text={"In 2022, I was awarded the 'best presentation award' from the Swiss Engineering Ticino foundation for my master thesis on self-driving cars."}/>
                </div>

                <div className={"award"}>
                    <BPTitle text={"SODESKA Scholarship (2021)"}/>
                    <BPParagraph size={"20px"} text={"In 2021, while studying for my master in Artificial Intelligence, I won the SODESKA scholarship awarded to the top 5 swiss students of the University of Southern Switzerland in a master course."}/>
                </div>
            </div>
        );
    }
}

export default Awards;