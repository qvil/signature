const signatrue = {
  toHTML: text => {
    document.prepend(document.createComment(text));
  },
  toConsole: text => {
    console.log(text);
  }
};

signatrue.exports = signatrue;
// export default signatrue;
