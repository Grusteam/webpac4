import "./styles/styles.css";
import _ from 'lodash';
// import "./styles/test.css";

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'world'], ' ');
	element.classList.add('hello');

   element.style.backgroundImage = 'url(./public/images/dog.png)';
    
	return element;
}

const node = document.body.appendChild(component());

// console.log(1);

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;