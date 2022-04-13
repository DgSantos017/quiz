import QuestionModel from '../../../model/question'
import RespostaModel from '../../../model/resposta'

const questions: QuestionModel[] = [
    new QuestionModel(300, 'Pergunta 1 ? ', [

        RespostaModel.respostaErrada('Abelha'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Pastel'),
        RespostaModel.respostaCerta('Maconha')
    ]),
    new QuestionModel(250, 'Pergunta 2 ? ', [

        RespostaModel.respostaErrada('fone'),
        RespostaModel.respostaErrada('mouse'),
        RespostaModel.respostaErrada('corno'),
        RespostaModel.respostaErrada('merda'),
        RespostaModel.respostaCerta('Flamengo')
    ])
]

export default questions