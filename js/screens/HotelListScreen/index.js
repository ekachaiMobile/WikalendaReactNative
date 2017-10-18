import ListScreen from "./../ListScreen";
export default class HotelListScreen extends ListScreen {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      cateID:'10',
      monthButton: require("./../../../img/current.png"),
      upcomingButton:require("./../../../img/upcoming.png")
    }
  }  
}