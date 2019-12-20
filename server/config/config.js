const config = {
  submittable: {
    serviceAccount: {
      Username: process.env.SUBMITTABLE_USERNAME || "",
      Password: process.env.SUBMITTABLE_PASSWORD || ""
    },
    ApiToken: process.env.SUBMITTABLE_API_TOKEN || ""
  },
  slack: {
    oauth: {
      token: process.env.SLACK_OAUTH_TOKEN || ""
    }
  },
  google: {
    serviceAccount: {
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT) || null
    }
  }
};

export default config;
