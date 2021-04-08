const router = require('express').Router();
const TabelaAgendamentos = require('../../agendamentos/TabelaAgendamento');
const Agendamento = require('../../agendamentos/Agendamentos');
const { response } = require('express');
// const { Json } = require('sequelize/types/lib/utils');

router.get('/agendamentos', async(req, res) => {
  const results = await TabelaAgendamentos.listar();

  res.send(JSON.stringify(results));
});

router.post('/agendamentos', async(req, res) => {
  const reqAgendamento = req.body;
  const agendamento = new Agendamento(reqAgendamento);
  await agendamento.criar();

  res.send(JSON.stringify(agendamento));

});

router.get('/agendamentos/:id', async(req, res) => {
  try {
    
  const id  = req.params.id;
  const agendamento = new Agendamento({id: id});

  await agendamento.buscar();
  res.send(JSON.stringify(agendamento));

  }catch(error){
    res.send(JSON.stringify({
      msg: error.mesage
    }));
  }
});

router.delete('/agendamentos/:idAgendamento', async(req, res) =>{
  try{

    const { idAgendamento: id} = req.params;
    const agendamento = new Agendamento({ id });

    await agendamento.remover();

    res.status(204).send(JSON.stringify({msg: 'Registro removido'}))
  }catch(error){
    res.send(JSON.stringify({msg: error}))
  }
});

module.exports = router;