const elasticSearch = require('@elastic/elasticsearch');

const esClient = new elasticSearch.Client({
  log: 'trace',
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'swvkHtluDSd1kJB6tQgs'
  }
});

async function search() {
  const result = await esClient.search({
    index: 'eventbridge_conversation_flow_index',
    query: {
      bool: {
        must_not: [
          {
            exists: {
              field: 'idEnd'
            }
          }
        ]
      }
    },
    _source: {
      includes: ['conversationId']
    }
  });
  console.log('result is', result);
  console.log('hits ', result.hits.hits);
  const res = result.hits.hits.map((row) => row._source.conversationId);
  console.log('----new result-------');
  console.log(res);
  return result;
}

search();
