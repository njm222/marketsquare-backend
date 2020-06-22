module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: process.env.MongoUri
      },
      options: {
        ssl: true
      },
    },
  },
});
