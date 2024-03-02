import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

// import { withErrorHandler } from '@/error-handling';
// import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
// import Header from '@/sections/Header';
// import HotKeys from '@/sections/HotKeys';
// import Notifications from '@/sections/Notifications';
// import SW from '@/sections/SW';
import MobileNav from '@/sections/MobileNav';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Pages />
        <MobileNav />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
