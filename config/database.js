module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        srv: true,
        uri: env('MONGO_URI'),
        ssl: { rejectUnauthorized: false }
      },
      options: {
        ssl: true,
        authenticationDatabase: '',
        useUnifiedTopology: true,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000
        }
      },
    },
  },
});
