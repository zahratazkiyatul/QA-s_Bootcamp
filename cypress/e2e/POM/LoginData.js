export const loginData = {
    valid: {
        username: "Admin",
        password: "admin123"
    },
    invalidPassword: {
        username: "Admin",
        password: "admin124"
    },
    invalidUsername: {
        username: "Adminz",
        password: "admin123"
    },
    invalidBoth: {
      username: "Adminzz",
      password: "admin1234"
    },

    emptyUsername: {
        username: "",
        password: "admin123"
    },
    emptyPassword: {
        username: "Admin",
        password: ""
    },
  emptyBoth: {
    username: "",
    password: ""
  }
}
