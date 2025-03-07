import React from 'react'
import styles from './Home.module.css';

const Home = ()=>{
    return(

        <section className={styles.home_container}>

            <h1>Bem vindo a <span>MAROSA</span></h1>
            <p>Compre os melhores artigos de casa!</p>
            <img className='product_home' src="./book_home.jpg" alt="" />

        </section>

    );
}

export default Home;