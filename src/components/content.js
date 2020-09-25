import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Content() {
    return (
        <Container>
            <Row>
                <Col><image src={{}} alt="Rose Clay and Honey Drop Soap"><h5>Rose Clay and Honey Drop Soap</h5></image>  </Col>
                <Col> <image src={{}} alt="Honey, Vanilla, & Oatmeal Goat Milk Soap"><h5>Honey, Vanilla, & Oatmeal Goat Milk Soap</h5></image> </Col>
                <Col> <image src={{}} alt="Orange & Vanilla Lip Scrub"><h5>Orange & Vanilla Lip Scrub</h5></image> </Col>
                <Col> <image src={{}} alt="Coffee Beans & Vanilla Goat Milk Soap"><h5>Coffee Beans & Vanilla Goat Milk Soap</h5></image> </Col>
            </Row>
            <Row>
                <Col> <h5>Lavender Donkey Milk Soap</h5> </Col>
                <Col> <h5>Mint Lip Scrub</h5> </Col>
                <Col> <h5>Eucalyptus Goat Milk Soap</h5> </Col>
                <Col> <h5>Teakwood & Charcoal Shea Butter Soap</h5> </Col>
            </Row>
            <Row>
                <Col> <h5>Apple Brown Sugar Shea Butter Soap</h5> </Col>
                <Col> <h5>Bath Tea with Milk Powder, Epsom Salt & Flowers</h5> </Col>
                <Col> <h5>Raspberry & Lemon Lip Scrub</h5> </Col>
                <Col> <h5>Lemongrass Drop Goat Milk Soap</h5> </Col>
            </Row>
        </Container>
    )
}
export default Content;