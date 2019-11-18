/**
 * Authorization Roles
 */
const authRoles = {
  admin: ["admin"],
  staff: ["admin", "staff"],
  user: ["admin", "staff", "user"],
  unregistered: ["unregistered"],
  authenticated: ["authenticated"],
  anonymous: []
};

export default authRoles;
