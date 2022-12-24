const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // Checking if we are in dev phase so we connect to different db
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "momo",
        mongodb_password: "123",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextBlog-dev",
      },
    };
  }

  // We connect to the live version of db
  return {
    env: {
      mongodb_username: "momo",
      mongodb_password: "123",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextBlog",
    },
  };
};
