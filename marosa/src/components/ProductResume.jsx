import Button from "./form/Button";
import style from "./ProductResume.module.css";

const ProductResume = ({ name_product, price_product }) => {
    return(
        <div className={style.container}>
            <p className={style.name}>{name_product}</p>
            <p className={style.price}>R${price_product}</p>
            <Button
            text="Saber mais" />
        </div>
    )
}

export default ProductResume