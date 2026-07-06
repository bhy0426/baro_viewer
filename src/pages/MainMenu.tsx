import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css';

const MainMenu = () => {
    return(
        <>
            <Container className="body border-start border-end">
                <h1>바로뷰어</h1>
                <Container className="main_menu">
                <Row>
                    <Col className="main_menu_col" >
                    <Button href="/create" variant="light" className='main_menu_button'>과제 방 생성</Button>
                    </Col>
                    <Col className="main_menu_col" >
                    <Button href="/myroom" variant="light" className='main_menu_button'>나의 과제 방</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="main_menu_col" >
                    <Button href="/info" variant="light" className='main_menu_button'>내 정보</Button>
                    </Col>
                    <Col className="main_menu_col" >
                    <Button href="/settings" variant="light" className='main_menu_button'>설정</Button>
                    </Col>
                </Row>
                </Container>
            </Container>
        </>
    );
};

export default MainMenu;