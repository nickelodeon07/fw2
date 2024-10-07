import Footer from "./component/footer";
import Navbar from "./component/navbar";
import {Container, Row, Col} from 'react-bootstrap';
function Index() {
    return <>
        <Navbar />
        <Container>
            <Row>
                <Col className="bg-primary-subtle">1 of 2</Col>
                <Col className="bg-secondary-subtle">2 of 2</Col>
            </Row>
            <Row>
                <Col className="bg-success-subtle">1 of 3</Col>
                <Col className="bg-warning-subtle">2 of 3</Col>
                <Col className="bg-body-secondary">3 of 3</Col>
            </Row>
        </Container>
        <Footer />
    </>

}
export default Index;