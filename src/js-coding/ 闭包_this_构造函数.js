let home = 'home0';
this.home = 'home1';
let logInfo = () => {
  console.log(`${home}/${this.home}`);
};
function createHomeObj(x) {
  let home = x;
  return {
    home: `home${x}`,
    logInfo() {
      console.log(`${home}/${this.home}`);
    }
  };
}

logInfo();
logInfo.call(window)

let homeObj1 = new createHomeObj(10);
let homeObj2 = new createHomeObj(20);
homeObj1.logInfo();
logInfo.call(homeObj1);
homeObj1.logInfo.call(homeObj2);

homeObj1.logInfo = homeObj2.logInfo;
homeObj1.logInfo();

homeObj2.logInfo = logInfo;
homeObj2.logInfo();


// home0/home1
// home0/home1
//  10/home10
// home0/home1
//  10/home20
//  20/home10
// home0/home1