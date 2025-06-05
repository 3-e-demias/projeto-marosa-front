import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteProd() {
  const { cod_prod } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:2025/produtos/${cod_prod}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da exclusão:', data);
        navigate('/ListProduct', {
          state: 'PRODUTO EXCLUÍDO COM SUCESSO!',
        });
      })
      .catch((err) => {
        console.error('Erro ao excluir o produto:', err);
      });
  }, [cod_prod, navigate]);

  return (
    <div>
      <h1>Excluindo o produto...</h1>
    </div>
  );
}

export default DeleteProd;
