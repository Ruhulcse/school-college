import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Notice from './Components/Notice';
import SingleEvent from './Components/SingleEvent';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/notice" element={<Notice />} />
					{/* <Route path="/all-courses" element={<Courses />} /> */}
					<Route path="/contact" element={<Contact />} />
					<Route path="/event/:eventid" element={<SingleEvent />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
