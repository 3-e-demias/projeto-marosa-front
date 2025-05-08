import Button from "./form/Button";
import style from "./ProductResume.module.css";

const ProductResume = ({ nome, preco }) => {
    console.log("Props recebidas:", nome, preco);
    return(
        <div className={style.container}>
            <p className={style.name}>{nome}</p>
            <p className={style.price}>R${preco}</p>
            <Button
            text="Saber mais" />
        </div>
    )
}

export default ProductResume