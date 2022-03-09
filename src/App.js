import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import NewCourses from './Components/NewCourses';
import StudentsReview from './Components/StudentsReview';

function App() {
	return (
		<div className="App">
			<Nav />
			<Home />
			<NewCourses />
			<StudentsReview />
			<Footer />
		</div>
	);
}

export default App;
