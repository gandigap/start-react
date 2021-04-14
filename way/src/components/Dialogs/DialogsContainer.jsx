import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapsDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;

