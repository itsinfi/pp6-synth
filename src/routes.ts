import { createBrowserRouter } from 'react-router';
import { LoginPage } from './pages/.index';
import ManualSynthPanelPage from './pages/ManualSynthPanelPage/ManualSynthPanelPage';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, Component: LoginPage },
            { path: 'generated', Component: ManualSynthPanelPage },
            { path: 'manual', Component: ManualSynthPanelPage },
        ],
    },
]);

export default router;
