import React from "react";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import style from './CreacteProduct.module.css';
import back from "../../../services/backend.js"
import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";
import styles from "../../components/form/Input.module.css"

const CreacteProduct = () => {
    const [categorias, setCategorias] = useState([])
    const [product, setProduct] = useState({});
    
    

    function handlerChangeProduct(event){
        setProduct({... product, [event.target.name] : event.target.value});
        console.log(product);
    }

    function handlerChangeCategory(event){
        setProduct({... product, categoria : event.target.options[event.target.selectedIndex].text});
    }

    
    function submit(event){
        event.preventDefault();
        console.log(product);
        creacteProduct(product);
    }


    function creacteProduct(product)
    {
    
            fetch('http://localhost:2025/produtos',{
                method:"POST",
                mode:'cors',
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                },body:JSON.stringify(product)
            }).then((response)=>{
                response.json();
            }).catch((error)=>{
                console.log(error)
            })
    
    }
    return(
        <div className={style.container}>
            <h1>Cadastro de produto</h1>

            <form onSubmit={submit}>

                <Input 
                text="Nome do produto:"
                type="text"
                name="nome"
                id="cod_product"
                placeholder="Toalha de mesa"
                handlerChange={handlerChangeProduct} 
            />

                <Input 
                text="Descrição:"
                type="text"
                name="descricao"
                id="description_product"
                placeholder="Vermelha com bolinhas brancas"
                handlerChange={handlerChangeProduct}
                />

                <Select 
                text="Categoria:"
                name="categoria"
                id="categoria" 
                handlerChange={handlerChangeCategory}
                />

                <Input 
                text="Preço:"
                type="number"
                name="preco"
                id="price_product"
                placeholder="R$25,00"
                handlerChange={handlerChangeProduct} 
            
                />

                <Button 
                text="Cadastrar"
                />

            </form>
    
        </div>
    )
}

export default CreacteProduct