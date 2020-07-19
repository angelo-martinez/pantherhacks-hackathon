require("./src/css/styles.css");

exports.onClientEntry = () => {
  window.onload = () => {
    window.objAccounts = [
      {
        username: "Medical",
        password: "User",
      },
      {
        usernam: "Maker",
        password: "User",
      },
    ];
  };
  window.loggedInAcc = {};
};
