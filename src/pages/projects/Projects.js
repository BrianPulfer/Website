import React from "react";

import {Image, ListGroup, ListGroupItem, Row, Col} from 'react-bootstrap'
import {HashLink} from "react-router-hash-link";

import './Projects.css'
import BPTitle from "../../components/title/BPTitle";
import BPParagraph from "../../components/paragraph/BPParagraph";

import DLL from './img/Deep Learning Lab.png'
import ML from './img/Machine Learning.gif'
import Bachelor from './img/Machine Learning for disambiguation of scientific article authors.png'
import NannySearch from './img/NannySearch.png'
import SmartBin from './img/SmartBin.png'
import Tiforma from './img/Tiforma.png';
import SDR from './img/Self Driving Robot.gif'


class Projects extends React.Component{
    render() {
        const paragraphSize = '180%';
        const projectLink_paragraphStyle = {
            fontSize: paragraphSize,
            margin: 0
        };
        return (
            <div>
                <div id={"Index"}>
                    <BPTitle size={"500%"} text={"Index"} underline={true}/>

                    <BPTitle classes={"sectionTitle"} size={"400%"} text={"Artificial Intelligence"} side={true}/>
                    <div id={"AI-Index"}>
                        <ListGroup>
                            <ListGroupItem>
                                <HashLink to={"#AI1"}>
                                    <BPTitle size={"200%"} text={"Machine Learning for disambiguation of scientific article authors"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <HashLink to={"#AI2"}>
                                    <BPTitle size={"200%"} text={"Deep Learning Lab"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <HashLink to={"#AI3"}>
                                    <BPTitle size={"200%"} text={"Machine Learning"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <HashLink to={"#AI4"}>
                                    <BPTitle size={"200%"} text={"Self-driving Robot"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <HashLink to={"#AI5"}>
                                    <BPTitle size={"200%"} text={"SmartBin (USI Hackathon 2019)"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                        </ListGroup>
                    </div>

                    <BPTitle classes={"sectionTitle"} size={"400%"} text={"Others"} side={true}/>
                    <div id={"Others-Index"}>
                        <ListGroup>
                            <ListGroupItem>
                                <HashLink to={"#O1"}>
                                    <BPTitle size={"200%"} text={"Nanny Search"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                            <ListGroupItem>
                                <HashLink to={"#O2"}>
                                    <BPTitle size={"200%"} text={"Tiforma Blockchain"} side={true}/>
                                </HashLink>
                            </ListGroupItem>
                        </ListGroup>
                    </div>

                </div>
                <div id={"Projects"}>
                    <div id={"AI-Projects"}>
                        <div id={'AI1'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"Machine Learning for disambiguation of scientific article authors"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={'text-center'}>
                                    <Image className={"prjimg"} src={Bachelor} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={"This project is an open-source implementation of a classifier which goal is to predict whether a pair of scientific articles (biomedical articles from the PubMed dataset) belongs to the same author or not."}/>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={"The final classifier (Random Forest) used 15 features and had an accuracy of 87% with a 10-fold cross-validation. Further studies on the datasets revealed that for some combinations of last names and initial of first names (namespaces), over 100'000 articles could be found. This study explains the need for a classifier able to distinguish between these authors."} />
                            </div>
                            <div className={"project-links"}>
                                <p className={"text-center bp-paragraph"} style={projectLink_paragraphStyle}>The project was my bachelor thesis job for which customer was <b>Hoffmann-La Roche A.G</b></p>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/AuthorNameDisambiguation"}>link</a>.
                                    </p>
                                </div>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can also visit the study on the Pubmed dataset at the following <a href={"https://github.com/BrianPulfer/PubMed-Namespacer"}>link</a>.
                                    </p>
                                </div>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        Documentation (Italian Only) of the bachelor's thesis can be downloaded at this <a href={process.env.PUBLIC_URL+"/resources/docs/Brian Pulfer - Machine Learning for disambiguation of scientific article authors.pdf"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id={'AI2'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"Deep Learning Lab"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={"text-center"}>
                                    <Image className={"prjimg"} src={DLL} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'This project is the collection of all activities that were done during a University course. With the use of Tensorflow 1, you will find various implementations of linear regression, feed forward neural networks, recurrent neural networks, convolutional neural networks, long short-term memory networks and a deep Q-learning algorithm (break-out agent).'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/Deep-Learning-Lab"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id={'AI3'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"Machine Learning"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={'text-center'}>
                                    <Image className={"prjimg"} src={ML} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'This project is the collection of all assignments that were done during a University course (Machine Learning).'} />
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'Assignments cover a series of topics in Machine Learning such as a deep learning framework implementation, a hidden markov model dynamic programming implementation and some implementations of evolutionary strategies (CEM, CMA-ES, NES).'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/Machine-Learning"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id={'AI4'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"Self-driving Robot"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={'text-center'}>
                                    <Image className={"mx-auto prjimg"} src={SDR} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'This project represents the final assignment of the course of Robotics held by the University of Southern Switzerland (USI). The goal of the project was to use both the theoretical and practical knowledge in the field of robotics to implement some complex program that would make the robot accomplish some goals.'}/>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'The project me and my team (2 other persons) came up with is a self-driving robot that, with the use of CNN, learns to avoid obstacles and walls in a virtual environment (ROS + Gazebo).'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/Learning-to-drive-by-crashing"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id={'AI5'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"SmartBin (USI Hackathon 2019)"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={'text-center'}>
                                    <Image className={"mx-auto prjimg"} src={SmartBin} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'This toy project took place during the USI Hackathon 2019 (48 hours coding hackathon) event held by the University of Southern Switzerland.\n' +
                                'The goal of the hackathon was to use data provided by the city of Lugano and others (Swisscom, A.I.L, TPL, ...) to develop an application that would be beneficial for the city.'}/>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'The project that my team and I have come up with is a mock-up of how a smart trash bin would work and how easy would it be for it to classify correctly different trash types (Paper, ALU, Batteries, Plastic, Others), which would make life of humans easier and help climate.'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/USI-Hackathon-2019"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={"Other-Projects"}>
                        <div id={'O1'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"NannySearch"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={"text-center"}>
                                    <Image className={"prjimg"} src={NannySearch} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'Tiny implementation of an information retrieval system (search engine).'}/>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'Apache Nutch and Solr were used to crawl and index a collection of around 1\'000 web pages of british nannies. Spring boot was then used to create a tiny web application that would serve as interface for the user to the collection.'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        You can visit the project's repository at the following <a href={"https://github.com/BrianPulfer/NannySearch"}>link</a>.
                                    </p>
                                </div>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        A tiny documentation of the project can be found at the following <a href={process.env.PUBLIC_URL+"/resources/docs/Brian Pulfer - NannySearch Report.pdf"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id={'O2'} className={"project"}>
                            <div className={"project-title"}>
                                <BPTitle classes={"prjtit"} text={"Tiforma Blockchain"} />
                            </div>
                            <Row className={"project-image"}>
                                <Col className={"text-center"}>
                                    <Image className={"prjimg"} src={Tiforma} fluid/>
                                </Col>
                            </Row>
                            <div className={"project-description"}>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'Semester project with the goal of implementing a web application based on blockchain for the management of students, courses, modules and more of the University (SUPSI).'}/>
                                <BPParagraph size={paragraphSize} className={"p bp-paragraph-project"} text={'The goal of the project was to create a blockchain based back-end network through the hyperledger composer framework and provide users a front-end Angular7 interface to make transitions on the network. In the end, users were able to act the main CRUD operations on every entity of the network (students, courses, modules, classes, ...) as well as printing and browsing through the database.'}/>
                            </div>
                            <div className={"project-links"}>
                                <div className={"project-link"}>
                                    <p className={"text-center"} style={projectLink_paragraphStyle}>
                                        Source code is not available, but documentation of the project can be found at the following <a href={"https://github.com/gionasdev/tiforma-blockchain"}>link</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;