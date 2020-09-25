import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content() {
    return (
        <Container>
            <Row>
                <Col> <p>Some text</p> </Col>
                <Col> <p>Some text</p> </Col>
                <Col> <p>Some text</p> </Col>
            </Row>
        </Container>
    )
}
export default Content;