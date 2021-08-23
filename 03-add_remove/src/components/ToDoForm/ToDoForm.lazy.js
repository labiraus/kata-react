import React, { lazy, Suspense } from 'react';

const LazyToDoForm = lazy(() => import('./ToDoForm'));

const ToDoForm = props => (
  <Suspense fallback={null}>
    <LazyToDoForm {...props} />
  </Suspense>
);

export default ToDoForm;
