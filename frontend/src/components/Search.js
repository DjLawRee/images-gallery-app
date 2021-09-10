
import React from 'react';
import {  Button, Form , Container , Row , Col, } from "react-bootstrap";

function Search ({word,setWord,handleSearchSubmit}) {
    return (
        <Container className="mt-2">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form onSubmit={handleSearchSubmit}>
                        <Form.Row>
                            <Col xs={9}>
                                <Form.Control 
                                type="text"
                                value={word}
                                onChange={(e) =>setWord(e.target.value)}
                                placeholder="Siorch"/>
                            </Col>
                            <Col >
                                <Button variant="primary" type="submit">Siorch</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;