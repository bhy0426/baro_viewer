import { Link } from 'react-router-dom'
import '../App.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return(
        <>
            <Container>
                <Link to="/">메인페이지</Link>
            </Container>
        </>
    );
};

export default Footer;