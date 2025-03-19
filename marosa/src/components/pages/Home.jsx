import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo à<span>MAROSA</span></h1>
            <p>O conforto da sua casa começa aqui!</p>
            <img className={styles.product_home} src="./marosa_capa.png" alt="Capa Marosa" />
        </section>
    );
}

export default Home;
