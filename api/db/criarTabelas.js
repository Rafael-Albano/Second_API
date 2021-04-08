const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamentos');

ModeloTabelaAgendamento.sync()
  .then(() => {
    console.log('Tabela criada com sucesso !');
  })
  .catch(error => console.log("Erro, tabela não criada" + error));