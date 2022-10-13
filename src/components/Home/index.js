import React, { Suspense } from 'react';

const HomeLazy = React.lazy(() =>
  import('./Home' /* webpackChunkName: "home" */)
);

const Home = () => {
  return (
    <Suspense fallback={null}>
      <HomeLazy />
    </Suspense>
  );
};

export default Home;
