import React, { useEffect, useState } from "react";
import ProductResume from "../ProductResume";
import style from './Listproduct.module.css';
import axios from "axios";

const ListProduct = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await axios.get("http://localhost:2025/produtos");
                console.log("Dados recebidos:", response.data);
                setProdutos(response.data);
                console.log("Produtos recebidos:", response.data); 
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        fetchProdutos();
    }, []);

    return (
        <div className={style.container}>
            <h1 className={style.title}>Produtos</h1>
            <div className={style.box}>
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        
                        <ProductResume
                            cod_prod = {produto.id}
                            key={produto.id}
                            nome={produto.Nome_produto}
                            descricao={produto.Descrição}
                            preco={produto.Preco}
                            categoria={produto.categoria_produto}
                        />
                    ))
                ) : (
                    <p>Nenhum produto cadastrado ainda.</p>
                )}
            </div>
        </div>
    );

    
};

export default ListProduct;