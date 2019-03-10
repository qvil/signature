// const SignatureCode = require("./index");
import SignatureCode from "./index";
import figlet from "figlet";

// figlet.defaults({ fontPath: window.location.origin + "/assets/ascii-fonts" });
figlet.defaults({ fontPath: "/assets/ascii-fonts" });

figlet.text(
  "Boo!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default"
  },
  function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
SignatureCode.toHTML("My Signature!");
SignatureCode.toConsole("My Signature!");
