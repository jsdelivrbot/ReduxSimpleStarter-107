import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import * as config from './config';

import SearchBar from './components/search_bar';

const API_KEY = config.keys.youtube;

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

// Create a new component that renders HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

// Take this component's genereated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));