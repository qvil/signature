// const css = require("./css");
import css from "./css";

const text =
  "Signature code! Check your console & Developer tool's Elements tab!";
const signatrue = {
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

signatrue.toHTML(text);
signatrue.toConsole(text);
document.body.append(text);

exports.signatrue = signatrue;
// export default signatrue;
