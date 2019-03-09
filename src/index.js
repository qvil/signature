// const css = require("./css");
import css from "./css";

// const text =
//   "Signature code! Check your console & Developer tool's Elements tab!";
const SignatureCode = {
  toHTML: text => {
    document.prepend(document.createComment(text));
  },
  toConsole: text => {
    console.log(
      `%cStyled %c${text} %cAwesome! 🚀`,
      css,
      "color: gray",
      "color: violet"
    );
  }
};

exports.SignatureCode = SignatureCode;
// module.exports = { SignatureCode };
window.SignatureCode = SignatureCode;
export default SignatureCode;
