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

    converterParaObjeto(){
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(r => r.converterParaObjeto()),
            acertou: this.#acertou
        }
    }
}