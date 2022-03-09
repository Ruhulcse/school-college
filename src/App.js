import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllCourses from './Pages/AllCourses';
import Home from './Pages/home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <Courses /> */}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all-courses" element={<AllCourses />} />
					{/* <Route path="/new-courses" element={<NewCourses />} /> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
