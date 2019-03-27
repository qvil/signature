import SignatureCode from "./index";
// import figlet from "figlet";

// figlet.text(
//   "Boo!",
//   {
//     font: "Malgun Gothic",
//     horizontalLayout: "default",
//     verticalLayout: "default"
//   },
//   function(err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   }
// );

// figlet.defaults({ fontPath: "/assets/ascii-fonts" });

// figlet("Hello World!!", function(err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// figlet.defaults({ fontPath: window.location.origin + "/assets/ascii-fonts" });

SignatureCode.toHTML("My Signature!");
SignatureCode.toConsole("My Signature!");
