import React, { lazy, Suspense } from 'react';

const LazyToDoList = lazy(() => import('./ToDoList'));

const ToDoList = props => (
  <Suspense fallback={null}>
    <LazyToDoList {...props} />
  </Suspense>
);

export default ToDoList;
