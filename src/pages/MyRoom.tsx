import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

import '../App.css';
import type { RoomForm, Room } from '../ts/room';

const MyRoom = () => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const savedRooms = localStorage.getItem('rooms');
        const parsedRooms: Room[] = savedRooms ? JSON.parse(savedRooms) : [];

        setRooms(parsedRooms);
    }, []);
    
    return(
        <>
            <Container className="body border-start border-end">
                <div className="title">나의 과제 방</div>
                <div>
                    {rooms.map((room) => (
                        <Card key={room.id}>

                        </Card>
                    ))}
                </div>
                {/* <Card style={{ width: '22vw' }}>
                    <Card.Body>
                        <Card.Title>기말 프로젝트</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </Container>
        </>
    );
};

export default MyRoom;