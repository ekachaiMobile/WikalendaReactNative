import ListScreen from "./../ListScreen";
export default class AttractionsListScreen extends ListScreen {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      cateID:'9',
      monthButton: require("./../../../img/current.png"),
      upcomingButton:require("./../../../img/upcoming.png")
    }
  }  
}