import Embaralhar from '../functions/arrays'
import RespostaModel from './resposta'

export default class QuestionModel {

    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
  

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }
    get enunciado() {
        return this.#enunciado
    }
    get respostas() {
        return this.#respostas
    }
    get acertou() {
        return this.#acertou
    }

    get respondida() {
        
        for(let r of this.#respostas) {
            if(r.revelada) return true
        }

        return false
    }

    get naoRespondida() {
        return !this.respondida
    }

    responderCom(indice: number): QuestionModel {

        const acertou = this.#respostas[indice]?.certa

        const respostas = this.#respostas.map((r, i) => {

            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || r.certa
            return deveRevelar ? r.revelar() : r
        })

        return new QuestionModel(this.id, this.enunciado, respostas, acertou)
    }


    embaralharRespostas(): QuestionModel{

        let respostasEmbaralhadas = Embaralhar(this.#respostas)
        return new QuestionModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }


    converterParaObjeto(){
        return {
            id: this.#id,
            acertou: this.#acertou,
            respondida: this.respondida,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(r => r.converterParaObjeto()),
            
        }
    }
}