import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import axios from 'axios';
import Rocket from './components/Rocket';
import Navbar from './components/Navbar/Navbar';
import Launches from './components/Launches';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const URL = "https://api.spacexdata.com/v4/rockets/"

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			spaceData: []
		};
	}

	componentDidMount() {
		axios(`${URL}`)
			.then(response => {
				this.setState({
					spaceData: [...response.data],
					isLoaded: true
				}, () => console.log("new", this.state));
			}).catch((err) => console.error(err));
	}

	render() {
		if (!this.state.isLoaded) {
			return (
				<>
					<Router>
						<Navbar />
						<h1>Loading...</h1>
					</Router>
				</>
			)
		} else {
			return (
				<>
					<Router>
						<div className="container" style={{ paddingTop: "5%" }}>
							<Navbar />
							<Switch>
								<Route exact path="/login" component={Login} />
								<Route exact path="/signup" component={SignUp} />
								<Route exact path="/" render={() => <Home launches={this.state.spaceData} />} />
								<Route exact path="/launches" component={Launches} />
								<Route exact path="/rockets/:id" component={Rocket} />
								<Route exact path="/launchDetail/:id" component={Rocket} />
							</Switch>
						</div>
					</Router>
				</>
			);
		}
	}
}

export default App;
