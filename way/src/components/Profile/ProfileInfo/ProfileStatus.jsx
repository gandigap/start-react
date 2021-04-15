import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className='profile-info__status'>
                {!this.state.editMode &&
                    <span onDoubleClick={() =>
                        this.activateEditMode()
                    }>{this.props.status}</span>}
                {this.state.editMode &&
                    <input autoFocus={true} onBlur={() =>
                        this.deactivateEditMode()}
                        value={this.props.status} type="text" name="" id="" />}
            </div>
        )
    }
}

export default ProfileStatus;

