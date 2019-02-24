const signatrue = {
  toHTML: text => {
    // document.body.innerHTML(text);
    // document.body.innerHTML = "<div />";
    document.body.innerHTML = text;
  },
  toConsole: text => {
    console.log(text);
  }
};

// module.exports = signatrue;
// export default signatrue;
