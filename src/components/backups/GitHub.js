import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class GitPullRequest extends Component {
    constructor() {
        super();
        this.state = {
            githubData: [],
            isActive: false
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1"
            )
            .then((res) => {
                console.log("res", res);
                this.setState({ githubData: res.data.items });
            });

        Modal.setAppElement("body");
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        });
    };

    render() {
        const { githubData } = this.state;
        return (
            <>
                <h1 style={{textAlign: "right", marginRight: "86px"}}>Git Hub Repos</h1>
                    {githubData.map((name, index) => (
                        <div key={name.id}>
                        <Container>
                        <Row style={{justifyContent: "flex-end"}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={name.owner.avatar_url} alt="Imagem do projeto" />
                                <Card.Body>
                                    <Card.Title>
                                        Projeto:&nbsp;
                                        {name.name}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Autor:&nbsp;
                                        {name.owner.login}
                                    </Card.Subtitle>
                                    <Card.Title>
                                        Descrição:&nbsp;
                                        {name.description}
                                    </Card.Title>
                                    <Card.Link>
                                        Link:&nbsp;
                                        <a href={name.homepage}>{name.homepage}</a>
                                    </Card.Link>
                                    <h1>
                                        Stars:&nbsp;
                                        {name.stargazers_count}
                                    </h1>
                                    <Button variant="primary" onClick={this.toggleModal}>
                                        Open pull request for this repository
                                    </Button>
                                </Card.Body>
                            </Card>
                            </Row>
                            </Container>
                            <Modal
                                isOpen={this.state.isActive}
                                onRequestClose={this.toggleModal}
                            >
                                <p onClick={this.toggleModal}>
                                    PULL REQUEST LIST FROM THIS REPOSITORY
                                </p>
                            </Modal>
                        </div>
                    ))}
                </>
        );
    }
}