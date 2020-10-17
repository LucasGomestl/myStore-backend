module.exports = {
  app: {
    PORT: process.env.PORT,
  },

  db: {
    connectionString: process.env.MONGO,
  },
};
