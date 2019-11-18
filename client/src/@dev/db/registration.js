import mock from "./../mock";

let registrationDB = {
  users: [
    {
      id: 12345,
      modules: [{}]
    }
  ]
};

mock.onGet("/api/staff/registration").reply();
