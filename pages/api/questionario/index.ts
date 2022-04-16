import Embaralhar from '../../../functions/arrays'
import questions from  '../questions/bancoDeQuestoes'

export default function questionario(req, res) {

    const ids = questions.map(q => q.id)
    
    res.status(200).json(Embaralhar(ids))
}