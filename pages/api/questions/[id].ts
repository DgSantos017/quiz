import questions from '../questions/bancoDeQuestoes'

export default (req, res) => {

  res.status(200).json(questions[0].converterParaObjeto())

}
  