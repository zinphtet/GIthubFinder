import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/Home/Home';
import UserPage from './pages/userPage/UserPage';
import GithubProvider from './context/githubContext';
import AlertProvider from './context/alertContext';
function App() {
	return (
		<>
			<GithubProvider>
				<AlertProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/users/:username" element={<UserPage />} />
					</Routes>
				</AlertProvider>
			</GithubProvider>
		</>
	);
}

export default App;
