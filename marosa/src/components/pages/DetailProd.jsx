import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import style from './DetailProd.module.css'
import Button from '../form/Button'

import fotoProd from '../../../public/marosa_logo.png'

const DetailProd = () => {

    /* RECUPERANDO O ID DA URL */
    const {cod_prod} = useParams();
    console.log('ID:' + cod_prod);

    /* CRIA O STATE DE DADOS QUE VAI ARMAZENAR O DETALHE DO PRODUTO ESCOLHIDO */
    const[prod, setProd] = useState({});

    /* RECUPERANDO OS DADOS DO PRODUTO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:2025/detailProd/${cod_prod}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setProd(data[0]);
            console.log(data);
            console.log(data.Nome_produto)
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return (
        <div className={style.grid}>
            
            <div className={style.container_img}>
                <img src={fotoProd} className={style.img_book_detail} alt='Foto do produto' />
            </div>

            <div className={style.info}>

                <span className={style.name}>{prod.Nome_produto}</span>
                <span className={style.categorie}>Categoria: {prod.categoria_produto}</span>
                <h1>R${prod.Preco},00</h1>

                <span className={style.descricao}>
                    {prod.Descrição}
                </span>

                <div className={style.container_buttons}>
                    
                    <Button 
                        text='Editar'
                        router='/updateProd/'
                        cod_prod={prod.id}
                        
                    />

                    <Button 
                        text='Excluir'
                        router='/deleteProd/'
                        cod_prod={prod.id}
                    />

                </div>

            </div>

        </div>
    )

}

export default DetailProd
