import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import MyMap from './components/MyMap';
import Parent from './components/Parent';
import ThemeContext from './ThemeContext';

function App() {
	const [themeColor, setThemeColor] = useState(false);
	return (
		<ThemeContext.Provider value={{ themeColor, setThemeColor }}>
			<div className={themeColor ? 'App light' : 'App dark'}>
				<button onClick={() => setThemeColor(prev => !prev)}>
					changer le theme
				</button>
				<BrowserRouter>
					<Switch>
						<Route path='/home' >
							<Link to='/map' > acceder a la map</Link>
						</Route>
						<Route path='/map' >
							<Parent />
						</Route>
						<Route path="/">
							<Redirect to="/home" />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
