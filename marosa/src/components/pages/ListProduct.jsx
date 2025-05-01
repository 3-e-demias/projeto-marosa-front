import React from "react";
import ProductResume from "../ProductResume";
import style from './Listproduct.module.css'

const ListProduct = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.title}>Produtos</h1>
            <div className={style.box}>
            </div>
        </div>
    )
}

export default ListProduct