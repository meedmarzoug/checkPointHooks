import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: white;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;

function ShowModal({ addMovie }) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <Container>
                <Button onClick={openModal}>Add Movie</Button>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    addMovie={addMovie}
                />
            </Container>
        </>
    );
}

export default ShowModal;
