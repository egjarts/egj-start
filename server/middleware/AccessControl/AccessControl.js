export const AccessControl = {
  can: Access
};

const Access = {
  read: () => {
    return { granted: true, filter: object => object };
  },
  readOwn: () => {
    return { granted: true, filter: object => object };
  }
};

export default function Can(anything) {
  return Access;
}
