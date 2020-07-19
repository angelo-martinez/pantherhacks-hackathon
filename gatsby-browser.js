require("./src/css/styles.css");

exports.onClientEntry = () => {
  window.onload = () => {
    window.objAccount = [
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
};
