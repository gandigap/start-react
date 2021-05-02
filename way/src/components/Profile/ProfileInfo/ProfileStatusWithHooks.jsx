import React, { useEffect, useState } from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div className='profile-info__status'>
            {!editMode &&
                <span onDoubleClick={activateEditMode} >{props.status || 'not have status'}</span>}
            {editMode &&
                <input
                    value={status}
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus={true} type="text" name="" id="" />}
        </div>
    )

}

export default ProfileStatusWithHooks;

