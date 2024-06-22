import React, { useState } from 'react';
import style from '../styles/predictionScreen.module.css';
import PopUpWindow from '../widgets/PopUpWindow';

function PredictionScreen() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCardClick = (card) => {
        setSelectedCard(prevCard => prevCard === card ? null : card);
        setErrorMessage('');  // Clear any previous error message
    };

    const handleSubmitClick = () => {
        if (selectedCard === null) {
            setErrorMessage('Please select a card before submitting.');
        } else {
            setShowModal(true);
        }
    };

    const handleConfirm = () => {
        setConfirmed(true);
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div className={style.container}>
            {
                confirmed ? <h2>Selected Card</h2> : <h2>Select a card</h2>
            }

            {confirmed ? (
                <div className={style.topContainer}>
                    {selectedCard === 'red' && <div className={style.red}></div>}
                    {selectedCard === 'green' && <div className={style.green}></div>}
                </div>
            ) : (
                <div className={style.topContainer}>
                    <div className={style.cardContainer}>
                        <div
                            className={style.red}
                            style={{ border: selectedCard === 'red' ? '5px solid yellow' : 'none' }}
                            onClick={() => handleCardClick('red')}
                        ></div>
                        <div
                            className={style.green}
                            style={{ border: selectedCard === 'green' ? '5px solid yellow' : 'none' }}
                            onClick={() => handleCardClick('green')}
                        ></div>
                    </div>
                    {errorMessage && <p className={style.error}>{errorMessage}</p>}
                    <button onClick={handleSubmitClick}>Submit</button>
                </div>
            )}
            {showModal && (
                <PopUpWindow
                    message="Are you sure?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default PredictionScreen;
