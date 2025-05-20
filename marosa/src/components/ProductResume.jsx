import Button from "./Button.jsx";
import style from "./ProductResume.module.css";

const ProductResume = ({ nome, preco, cod_prod  }) => {
    console.log("Props recebidas:", nome, preco);
    return(
        <div className={style.container}>
            <p className={style.name}>{nome}</p>
            <p className={style.price}>R${preco}</p>
            <Button
            text="Saber mais" 
            router = '/detailProd/'
            cod_prod={cod_prod}/>
        </div>
    )
}

export default ProductResume