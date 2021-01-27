module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'ap-south-1',
      params: {
        Bucket: 'marketsquare-cdn',
      },
    },
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'test-admin@marketsquare.co.in',
      defaultReplyTo: 'test-admin@marketsquare.co.in',
    },
  },
});
