import React from 'react';


const ProfileStatusWithHooks = (props) => {
    return (
        <div className='profile-info__status'>
            {!this.state.editMode &&
                <span onDoubleClick={() =>
                    this.activateEditMode()
                }>{this.props.status || 'not have status'}</span>}
            {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={() =>
                    this.deactivateEditMode()}
                    value={this.state.status} type="text" name="" id="" />}
        </div>
    )

}

export default ProfileStatusWithHooks;

