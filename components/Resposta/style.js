import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    min-width: 500px; 
    width: 80%;
    height: 100px;
    margin: 10px;
    perspective: 1000px;
  
`
export const ConteudoResposta = styled.div`
    
    position: relative;
    display: flex;
    flex: 1;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  
`
export const Frente = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    align-items: center;
    border-radius: 12px;
    padding: 15px;
    color: #000;
    background-color: #fff;
`

export const Verso = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
  
`
export const Letra = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    font-size: 1.3rem;
    font-weight: 700;
    margin-right: 20px;
    color: #fff;
`
export const Valor = styled.div`
  font-size: 1.3rem;
    font-weight: 700;
  
`