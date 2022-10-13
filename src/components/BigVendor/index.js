import React, { Suspense } from 'react';

const BigVendorLazy = React.lazy(() =>
  import('./BigVendor' /* webpackChunkName: "big-vendor" */)
);

const BigVendor = () => {
  return (
    <Suspense fallback={null}>
      <BigVendorLazy />
    </Suspense>
  );
};

export default BigVendor;
