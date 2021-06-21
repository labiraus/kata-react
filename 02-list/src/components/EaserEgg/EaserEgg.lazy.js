import React, { lazy, Suspense } from 'react';

const LazyEaserEgg = lazy(() => import('./EaserEgg'));

const EaserEgg = props => (
  <Suspense fallback={null}>
    <LazyEaserEgg {...props} />
  </Suspense>
);

export default EaserEgg;
