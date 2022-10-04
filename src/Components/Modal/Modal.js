import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  z-index:999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
`;



const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 3px 10px;
    background: #141414;
    color: #fff;
    border: none;
  }
  button:hover {
    background: none;
    border: 2px solid #000;
    color: #000;
}
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const ModalInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    input {
        border: 2px solid #aaaa;
        border-radius: 4px;
    }
`;


function ModalAdd({ showModal, setShowModal, addMovie }) {
    const [Title, setTitle] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState(1);
    const animation = useSpring({
        config: {
            duration: 250,
        },

        transform: showModal ? `translateY(20%)` : `translateY(0%)`,
    });

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

    return (
        <>
            {showModal ? (
                <Background>
                    <animated.div style={animation}>
                        <Modal showModal={showModal}>
                            <ModalInput>
                                <div
                                    className="space-x-4 space-y-3"
                                    style={{ margin: "2px" }}
                                >
                                    <label>Movie Title</label>
                                    <input
                                        name="title"
                                        placeholder="Titanic"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                                <div
                                    className="space-x-4 space-y-3"
                                    style={{ margin: "2px" }}
                                >
                                    <label>Movie Post</label>
                                    <input
                                        name="postUrl"
                                        placeholder="http/image/.."
                                        onChange={(e) =>
                                            setPosterUrl(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-x-4 space-y-3">
                                    <label>Movie Rate</label>
                                    <input
                                        name="rate"
                                        placeholder="2"
                                        onChange={(e) =>
                                            setRate(e.target.value)
                                        }
                                    />
                                </div>
                            </ModalInput>

                            <ModalContent>
                                <div>
                                    <h1>Add Movie</h1>
                                    <p>Be sure to type the data correctly</p>
                                    <button
                                        onClick={() =>
                                            addMovie({ Title, rate, posterUrl })
                                        }
                                    >
                                        Add movie
                                    </button>
                                </div>
                            </ModalContent>
                            <CloseModalButton
                                aria-label="Close modal"
                                onClick={() => setShowModal(!showModal)}
                            />
                        </Modal>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
}

export default ModalAdd;

