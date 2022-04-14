import QuestionModel from '../../../model/question'
import RespostaModel from '../../../model/resposta'

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Pergunta 1 ? ', [

        RespostaModel.respostaErrada('Abelha'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Pastel'),
        RespostaModel.respostaCerta('Maconha')
    ]),
    new QuestionModel(2, 'Pergunta 2 ? ', [

        RespostaModel.respostaErrada('fone'),
        RespostaModel.respostaErrada('mouse'),
        RespostaModel.respostaErrada('corno'),
        RespostaModel.respostaErrada('merda'),
        RespostaModel.respostaCerta('Flamengo')
    ]),
    new QuestionModel(3, 'Pergunta 1 ? ', [

        RespostaModel.respostaErrada('Abelha'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Jacare'),
        RespostaModel.respostaErrada('Pastel'),
        RespostaModel.respostaCerta('Maconha')
    ]),
    new QuestionModel(4, 'Pergunta 2 ? ', [

        RespostaModel.respostaErrada('fone'),
        RespostaModel.respostaErrada('mouse'),
        RespostaModel.respostaErrada('corno'),
        RespostaModel.respostaErrada('merda'),
        RespostaModel.respostaCerta('Flamengo')
    ]),
    new QuestionModel(5, 'Pergunta 2 ? ', [

        RespostaModel.respostaErrada('fone'),
        RespostaModel.respostaErrada('mouse'),
        RespostaModel.respostaErrada('corno'),
        RespostaModel.respostaErrada('merda'),
        RespostaModel.respostaCerta('Flamengo')
    ])
]

export default questions