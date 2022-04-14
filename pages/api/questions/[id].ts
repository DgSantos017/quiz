import questions from '../questions/bancoDeQuestoes'

export default (req, res) => {

  const id = +req.query.id

  const questionFiltrada = questions.filter(q => q.id === id)


  if(questionFiltrada.length === 1){

    const question = questionFiltrada[0].embaralharRespostas()
    
    res.status(200).json(question.converterParaObjeto())

  }else{
    res.status(204).send()
  }   
}
  