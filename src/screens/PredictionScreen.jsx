import React, { useState } from 'react';
import style from '../styles/predictionScreen.module.css';
import PopUpWindow from '../widgets/PopUpWindow';


function PredictionScreen() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleSubmitClick = () => {
        setShowModal(true);
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
            <h2>Select Your Card</h2>
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
                            style={{ border: selectedCard === 'red' ? '1px solid green' : 'none' }}
                            onClick={() => handleCardClick('red')}
                        ></div>
                        <div
                            className={style.green}
                            style={{ border: selectedCard === 'green' ? '1px solid green' : 'none' }}
                            onClick={() => handleCardClick('green')}
                        ></div>
                    </div>
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
