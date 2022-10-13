import React, { Suspense } from 'react';

const BigImageLazy = React.lazy(() =>
  import('./BigImage' /* webpackChunkName: "big-image" */)
);

const BigImage = () => {
  return (
    <Suspense fallback={null}>
      <BigImageLazy />
    </Suspense>
  );
};

export default BigImage;
