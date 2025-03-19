import React from "react";
import { useState } from "react";
import InputMask from "react-input-mask";
import style from './CreacteProduct.module.css';

import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreacteProduct = () => {
        
    const [product, setProduct] = useState({});

    function handlerChangeProduct(event){
        setProduct({... product, [event.target.name] : event.target.value});
        console.log(product);
    }

    function handlerChangeCategory(event){
        setProduct({... product, category : event.target.options[event.target.selectedIndex].text});
    }

    function submit(event){
        event.preventDefault();
        console.log(product);
    }

    return(
        <div className={style.container}>
            <h1>Cadastro de produto</h1>

            <form onSubmit={submit}>

                <Input 
                text="Nome do produto:"
                type="text"
                name="inp_produto"
                id="inp_produto"
                placeholder="Toalha de mesa"
                handlerChange={handlerChangeProduct} />

                <Input 
                text="Descrição:"
                type="text"
                name="inp_descricao"
                id="inp_descricao"
                placeholder="Vermelha com bolinhas brancas"
                handlerChange={handlerChangeProduct} />

                <Select 
                text="Categoria:"
                name="slc_categoria"
                id="slc_categoria" 
                handlerChange={handlerChangeCategory}/>

                <Input 
                text="Preço:"
                type="number"
                name="inp_preco"
                id="inp_preco"
                placeholder="R$25,00"
                handlerChange={handlerChangeProduct} />

                <Button 
                text="Cadastrar" />

            </form>
    
        </div>
    )
}

export default CreacteProduct