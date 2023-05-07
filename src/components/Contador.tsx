import React, { useState } from 'react'
import styles from '../styles/Contador.module.css';

const Contador = () => {
    const [numero, setNumero] = useState(0);

    function incrementar () {
        setNumero(numero + 1);
    }

    function decrementar () {
        setNumero(numero - 1);
    }

    function resetar () {
        setNumero(0);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Contador</h1>
            <div className={styles.circulo}>
                <p className={styles.numero}>{numero}</p>
            </div>
            <div className={styles.botoes}>
                <button className={styles.botaoDecremento} onClick={decrementar}>Decrementar</button>
                <button className={styles.botaoReset} onClick={resetar}>Resetar</button>
                <button className={styles.botaoIncremento} onClick={incrementar}>Incrementar</button>
            </div>
        </div>
    )
}

export default Contador