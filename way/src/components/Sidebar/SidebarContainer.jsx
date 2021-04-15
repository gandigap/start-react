import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    sidebarPage: state.sidebarPage
  }
}

let mapsDispatchToProps = (dispatch) => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapsDispatchToProps),
)(Sidebar);
