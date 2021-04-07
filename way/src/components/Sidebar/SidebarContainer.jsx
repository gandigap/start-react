import Sidebar from './Sidebar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    sidebarPage: state.sidebarPage
  }
}

let mapsDispatchToProps = (dispatch) => {
  return {

  }
}
const SidebarContainer = connect(mapStateToProps, mapsDispatchToProps)(Sidebar)

export default SidebarContainer;