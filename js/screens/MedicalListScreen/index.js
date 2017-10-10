import ListScreen from "./../ListScreen";

export default class MedicalListScreen extends ListScreen {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      cateID:'12',
      monthButton: require("./../../../img/current.png"),
      upcomingButton:require("./../../../img/upcoming.png")
    }
  }  
}