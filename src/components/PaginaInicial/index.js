import React, { useState } from 'react';
import './style.css';

export default function PaginaInicial() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(1);
    const corDeFundoVermelho = 'bg-vermelho';
    const corDeFundoAzul = 'bg-azul';

    const [estiloAtualizado, setEstiloAtualizado] = useState(false);
    const alterarCor = () => {
       setEstiloAtualizado(!estiloAtualizado);
    }

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    return (
        <div className='background'>
            <div className='conteudo-box'>
                <h2>Número aleatório:</h2>
                <h1>{numeroAleatorio}</h1>

                <div className='button-box'>
                    <label>Clique no botão abaixo para gerar um número aleatório:</label>
                    <button onClick={gerarNumero}>Gerar número</button>
                </div>
            </div>
            <div className='conteudo-box'>
                <h2>Altere o estilo do elemento</h2>
                <div id='elemento' className={estiloAtualizado ? corDeFundoAzul : corDeFundoVermelho} ></div>
                <div className='button-box'>
                    <label>Clique no botão abaixo para alterar o estilo do elemento:</label>
                    <button onClick={alterarCor}>Clique aqui</button>
                </div>
            </div>
        </div>
    )
}

