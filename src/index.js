const signatrue = {
  toHTML: text => {
    document.prepend(document.createComment(text));
  },
  toConsole: text => {
    console.log(
      `%cStyled %c${text} %cAwesome! 🚀`,
      "color: hotpink",
      "color: gray",
      "color: violet"
    );
  }
};

exports.signatrue = signatrue;
// export default signatrue;
