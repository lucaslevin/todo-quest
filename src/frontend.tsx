import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('rootElement not found');
}

const app = (
	<StrictMode>
		<App />
	</StrictMode>
);

if (import.meta.hot) {
	let root = import.meta.hot.data.root;

	if (!root) {
		root = import.meta.hot.data.root = createRoot(rootElement);
	}

	root.render(app);
} else {
	createRoot(rootElement).render(app);
}
