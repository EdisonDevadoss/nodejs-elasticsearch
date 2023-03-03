const elasticSearch = require('@elastic/elasticsearch');

const esClient = new elasticSearch.Client({
  log: 'trace',
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'swvkHtluDSd1kJB6tQgs'
  }
});

esClient.ping(
  {},
  {
    requestTimeout: 1000
  },
  function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  }
);

async function ingest() {
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b45',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe87',
      name: 'testing'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b46',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe88',
      name: 'testing01'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b47',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe89',
      name: 'testing02'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe90',
      name: 'testing01'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe91',
      name: 'testing02'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe92',
      name: 'testing03'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b48',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe93',
      name: 'testing04'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b49',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe94',
      name: 'testing04'
    }
  });
  await esClient.index({
    index: 'eventbridge_conversation_flow_index',
    document: {
      idEnd: 'c32d8b50',
      conversationId: 'c32d8b45-92fe-44f6-8b61-42c2107dfe95',
      name: 'testing05'
    }
  });
}

ingest();
