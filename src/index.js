import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

/** counter 开始 */
// import { createStore } from 'redux';
// import Counter from './example/counter/components/Counter';
// import { counterInfo } from './example/counter/reducer';
// import * as Const from './example/counter/constant';
// const store = createStore(counterInfo);

// const render = () => ReactDOM.render(
// 	<Counter
//         value={ store.getState() }
//         onIncrement={ () => { store.dispatch({ type: Const.INCREMENT })}}
//         onDecrement={ () => { store.dispatch({ type: Const.DECREMENT })}}
//       />,
// 	document.getElementById('root')
// );

// render();
// store.subscribe(render);
/** counter 结束 */

// let store = createStore();

/** todos start ***/
import App from './example/todos/components/App';
import reducer from './example/todos/reducers';

let store = createStore(reducer);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
/** todos end ***/

registerServiceWorker();
