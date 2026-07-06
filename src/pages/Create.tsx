import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../App.css';
import type { RoomForm, Room } from '../ts/room';

const Create = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

    const [room, setRoom] = useState<RoomForm>({
        year: '',
        semester: '',
        className: '',
        assignmentName: '',
        dueDate: '',
        dueTime: '',
        professor: '',
        password: '',
    });

    const createNewRoom = () => {
        const savedRooms = localStorage.getItem('rooms');
        const rooms: Room[] = savedRooms ? JSON.parse(savedRooms) : [];

        const newRoom: Room = {
            id: rooms.length,
            createdAt: new Date().toISOString(),
            ...room,
        };
        const nextRooms = [...rooms, newRoom];

        localStorage.setItem('rooms', JSON.stringify(nextRooms));
    }

    return(
        <>
            <Container className="body border-start border-end">
                <div className="title">과제 방 생성</div>
                <div>방 정보 입력</div>
                <Form className="create_formgroup">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>연도</Form.Label>
                                <Form.Select onChange={(e) => setRoom({...room, year: e.target.value})}>
                                    <option>학기를 선택하세요.</option>
                                    {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>학기</Form.Label>
                                <Form.Select onChange={(e) => setRoom({...room, semester: e.target.value})}>
                                    <option>학기를 선택하세요.</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group>
                            <Form.Label>강좌명</Form.Label>
                            <Form.Control type="text" 
                                            placeholder='강좌명을 입력해주세요.'
                                            onChange={(e) => setRoom({...room, className: e.target.value})}>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group>
                            <Form.Label>과제명</Form.Label>
                            <Form.Control type="text" 
                                            placeholder='과제명을 입력해주세요.'
                                            onChange={(e) => setRoom({...room, assignmentName: e.target.value})}>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>제출기한</Form.Label>
                                <Form.Control type="date" onChange={(e) => setRoom({...room, dueDate: e.target.value})}>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>제출시각</Form.Label>
                                <Form.Control type="time" onChange={(e) => setRoom({...room, dueTime: e.target.value})}>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group>
                            <Form.Label>교수명</Form.Label>
                            <Form.Control type="text" onChange={(e) => setRoom({...room, professor: e.target.value})}>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group>
                            <Form.Label>방 비밀번호</Form.Label>
                            <Form.Control type="password" onChange={(e) => setRoom({...room, password: e.target.value})}>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    
                </Form>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    createNewRoom()
                    }}>
                    <Button type="submit">
                        생성
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Create;