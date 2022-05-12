const cassandra = require('cassandra-driver');
const config = require('config');
// const db = config.get('cassandraURI');

const client = new cassandra.Client({ 
  contactPoints: [config.get('cassandraURI')],
  localDataCenter: 'datacenter1',
  keyspace: 'cs157c'
});

client.connect();
console.log("Connected to Cassandra")


module.exports = client;