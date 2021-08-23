import React, { lazy, Suspense } from 'react';

const LazyToDoModal = lazy(() => import('./ToDoModal'));

const ToDoModal = props => (
  <Suspense fallback={null}>
    <LazyToDoModal {...props} />
  </Suspense>
);

export default ToDoModal;
