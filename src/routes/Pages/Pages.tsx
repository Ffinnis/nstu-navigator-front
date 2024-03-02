import { Route, Routes } from 'react-router-dom';

import { PageContainer } from '@/components/styled';

import routes from '..';

function Pages() {
  return (
    <PageContainer>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </PageContainer>
  );
}

export default Pages;
