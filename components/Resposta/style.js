import styled from 'styled-components'

export const Container = styled.section`

    display: flex;
    min-width: 500px; 
    width: 80%;
    height: 100px;
    margin: 10px;
    perspective: 1000px;
    box-shadow: 8px 8px 8px rgba(0,0,0,0.4);
  
`
export const ConteudoResposta = styled.div`
    
    position: relative;
    display: flex;
    flex: 1;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    :hover{
        cursor: pointer;
    }
  
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

    :hover {
        background-color: #00b0ff;
        transition: 1.3s;
    }
`

export const Verso = styled.div`
     position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    align-items: center;
    border-radius: 12px;
    padding: 15px;
    background-color: white;
    color: black;
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
    font-weight: 700;
    font-size: 1.5rem;
  
`

export const Revelacao = styled.div`
   color: white;
`

