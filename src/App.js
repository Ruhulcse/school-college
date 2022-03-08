import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import StudentsReview from './Components/StudentsReview';

function App() {
	return (
		<div className="App">
			<Nav />
			<Home />
			<StudentsReview />
			{/* <Review /> */}
			<Footer />
		</div>
	);
}

export default App;
