import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/Home/Home';
import UserPage from './pages/userPage/UserPage';
import GithubProvider from './context/githubContext';
function App() {
	return (
		<>
			<GithubProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/:username" element={<UserPage />} />
				</Routes>
			</GithubProvider>
		</>
	);
}

export default App;
