import ListScreen from "./../ListScreen";

export default class ConcertsListScreen extends ListScreen {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      cateID:'6',
      monthButton: require("./../../../img/current.png"),
      upcomingButton:require("./../../../img/upcoming.png")
    }
  }  
}