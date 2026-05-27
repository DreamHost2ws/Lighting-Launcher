const { Client, Authenticator } = require("minecraft-launcher-core");

function launchMinecraft(username) {
  const launcher = new Client();

  const opts = {
    authorization: Authenticator.getAuth(username),
    root: "./minecraft",
    version: {
      number: "1.21.1",
      type: "release"
    },
    memory: {
      min: "2G",
      max: "6G"
    }
  };

  launcher.launch(opts);

  launcher.on("debug", (e) => console.log("[Lighting] " + e));
  launcher.on("data", (e) => console.log(e));
}

module.exports = { launchMinecraft };
