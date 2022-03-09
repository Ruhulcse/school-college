import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import AllCourses from './Pages/AllCourses';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all-courses" element={<AllCourses />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
