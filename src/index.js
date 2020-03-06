import viewScreen from "./views/view_screen.js";
import StoreScreen from "./models/store_screen.js";
import ControllerScreen from "./controllers/controller_screen.js";

viewScreen.init(storeScreen);
const storeScreen = new StoreScreen();
//const screen = new viewScreen( storeScreen );
const controllerScreen = new ControllerScreen( storeScreen, viewScreen );




screen.createRows();
screen.startObservRows();
controllerScreen.addListeners();

// storeScreen.startDrawing('bca');
// storeScreen.shiftElement();


// console.log(screen.storeAllLamps);
// console.log(store.storeAllLamps);


// console.log(screen.storeAllLamps);