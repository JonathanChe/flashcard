// options for pg-promise
const initOptions = {
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('Disconnecting from database:', cp.database);
  },
  query(e) {
    console.log('QUERY:', e.query);
  },
  receive(data, result, e) {
    console.log('DATA: ', data);
  },
};

module.exports = initOptions;
