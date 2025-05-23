import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './UpdateProduct.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Button from '../form/Button'

const UpdateProduct = () => {

        const [product, setProduct] = useState({});
        const {cod_prod} = useParams();
        const navigate = useNavigate();
        const [categorias, setCategorias] = useState([]);

        function handlerChangeProduct(event) {
                setProduct({...product, [event.target.name] : event.target.value});
                console.log(product)
        }

        function handlerChangeCategory(event) {
                setProduct({...product, categoria: event.target.value});
                console.log(product);
        }

        useEffect(()=>{
                fetch(`http://localhost:5000/detailProd/${cod_prod}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        setProduct(data.data);
                })
                .catch((err)=>{console.log(err)});
        }, []);

        function updateProduct(product) {
        
                console.log(JSON.stringify(product))
        
                fetch('http://localhost:5000/alterarProduto', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(product)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/listProduct',{state:'Produto alterado com sucesso!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        function submit(event) {
                event.preventDefault();
                updateProduct(product);
        }

        return (
                <div className={style.container}>
                        <h1>Alteração de produtos</h1>

                        <form onSubmit={submit}>

                                <Input 
                                text="Nome do produto:"
                                type="text"
                                name="nome"
                                id="cod_product"
                                placeholder="Toalha de mesa"
                                handlerChange={handlerChangeProduct} 
                                value={product.Nome_produto} />

                                <Input 
                                text="Descrição:"
                                type="text"
                                name="descricao"
                                id="description_product"
                                placeholder="Vermelha com bolinhas brancas"
                                handlerChange={handlerChangeProduct} 
                                value={product.Descrição} />

                                <Select 
                                text="Categoria:"
                                name="categoria"
                                id="categoria" 
                                handlerChange={handlerChangeCategory} />

                                <Input 
                                text="Preço:"
                                type="number"
                                name="preco"
                                id="price_product"
                                placeholder="R$25,00"
                                handlerChange={handlerChangeProduct} 
                                value={product.Preco} />

                                <Button 
                                text='Editar produto'/>

                        </form>

                </div>
        )
        }

export default UpdateProduct
