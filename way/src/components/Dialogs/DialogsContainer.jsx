import { addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapsDispatchToProps),
    withAuthRedirect
)(Dialogs);;

