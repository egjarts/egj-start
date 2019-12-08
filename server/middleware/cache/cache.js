import NodeCache from 'node-cache';
const cache = new NodeCache();

export const keys = {
  submittable: {
    authentication: {
      token: 'submittable.authentication.token'
    },
    submission: id => `submittable.submission:id=${id}`
  }
};

export default cache;
