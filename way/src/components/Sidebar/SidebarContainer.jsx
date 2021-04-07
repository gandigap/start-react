import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../StoreContext';

const SidebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().sidebarPage;
        return (
          <Sidebar
            sidebarPage={state} />
        );
      }}
    </StoreContext.Consumer>

  )
}

export default SidebarContainer;