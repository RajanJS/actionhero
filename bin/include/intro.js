exports['intro'] = function(binary, next){
  binary.log("\r\n**********\r\n");
  binary.log("You have installed actionHero!  Hooray!".green);
  binary.log("You can use the command:");
  binary.log("  npm run-script actionHero generate".bold)
  binary.log("to generate a template project in an empty directoy");
  binary.log("");
  binary.log("You may wish to add local node_module binaries your path: `export PATH=$PATH:node_modules/.bin` or install the package globally");
  binary.log("This will let you use the commands `actionHero start` and `actionHero generateAction` etc");
  binary.log("");
  binary.log("Documentation and more can be found @ " + "http://actionherojs.com".bold.blue);
  binary.log("\r\n**********\r\n");

  next(null, true);
}