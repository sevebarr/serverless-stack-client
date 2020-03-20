export default {
  STRIPE_KEY: "pk_test_x3GKxwPlju7kWGhDiHNnC9EZ00XbVxdQQI",

  s3: {
    REGION: "us-east-2",
    BUCKET: "sevesfirstawsbucket"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ybvz8azu1f.execute-api.us-east-2.amazonaws.com/prod"
  },

  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_2NnHjMSJa",
    APP_CLIENT_ID: "60dcm29b4tah64oq74gro9p9t5",
    IDENTITY_POOL_ID: "us-east-2:ec225cdf-925f-4b38-8ed5-86e58e68980a"
  }
};
