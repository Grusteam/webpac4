/* styles */
import "./styles/styles.css";
// import "./styles/test.css";

/* lodash - импортировать !МОДУЛЯМИ */
import _join from 'lodash/join';
// import _forEach from 'lodash/forEach';

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _join(['Hello', 'from JS',], ' ');
	element.classList.add('hello');

   element.style.backgroundImage = 'url(./public/images/dog.png)';
    
	return element;
}

const node = document.body.appendChild(component());

// console.log(1);

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;

/* rest / spread> */
/* const
	arr = ['x', 'y', 'z'],
	f_arr = (...all) => all;

console.log('...f_arr(...arr)', ...f_arr(...arr)); */
/* <rest / spread */