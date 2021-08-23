import React, { lazy, Suspense } from 'react';

const LazyToDoListElement = lazy(() => import('./ToDoListElement'));

const ToDoListElement = props => (
  <Suspense fallback={null}>
    <LazyToDoListElement {...props} />
  </Suspense>
);

export default ToDoListElement;
