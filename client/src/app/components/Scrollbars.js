import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { Scrollbars as CustomScrollbars } from 'react-custom-scrollbars';

const Scrollbars = ({ onScroll, forwardedRef, style, className, children }) => {
  const refSetter = useCallback(
    scrollbarsRef => {
      if (scrollbarsRef) {
        forwardedRef(scrollbarsRef.view);
      } else {
        forwardedRef(null);
      }
    },
    [forwardedRef]
  );

  return (
    <CustomScrollbars
      ref={refSetter}
      className={className}
      style={{ ...style, overflow: 'hidden' }}
      onScroll={onScroll}
    >
      {children}
    </CustomScrollbars>
  );
};

export default Scrollbars;

export const VirtualWindowScrollbars = React.forwardRef((props, ref) => {
  return <Scrollbars {...props} forwardedRef={ref} />;
});
