require("./src/css/styles.css");

exports.onClientEntry = () => {
  window.onload = () => {
    window.objAccounts = [
      {
        username: "Medical",
        password: "User",
        type: "Medic",
      },
      {
        username: "Maker",
        password: "User",
        type: "Maker",
      },
    ];
  };
  window.loggedInAcc = {};
};
