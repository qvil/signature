const signatrue = {
  toHTML: text => {
    document.prepend(document.createComment(text));
  },
  toConsole: text => {
    console.log(text);
  }
};

exports.signatrue = signatrue;
// export default signatrue;
