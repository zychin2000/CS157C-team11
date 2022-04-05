const cassandra = require('cassandra-driver');
// const config = require('config');
// const db = config.get('cassandraURI');

console.log("New Cassandra instance is created!")

const client = new cassandra.Client({ 
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'cs157c'
});

client.connect();


module.exports = client;