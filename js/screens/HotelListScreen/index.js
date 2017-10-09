import ListScreen from "./../ListScreen";

export default class HotelListScreen extends ListScreen {
  constructor(props) {
    GLOBAL = require('WikalendaNativeBase/js/global');
    GLOBAL.CATEID  = '12'
    super(props);
  }  
}