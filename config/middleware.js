module.exports = {
  timeout: 100,
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      origin: ['https://marketsquare-frontend.web.app', 'https://marketsquare-backend.herokuapp.com'],
    },
    favicon: {
      path: 'favicon.ico',
      maxAge: 86400000
    },
    public: {
      path: './public',
      maxAge: 60000,
    },
  },
};
