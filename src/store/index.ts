import { createStore, Store } from "redux";
import { Meal } from "../pages/home";
import { getAllItems } from "../utils/localstorage";
import { favouriteAction } from "./actions";
import { favoritesReducer } from "./reducers";

const preloadedState: Meal[] = getAllItems();

export const store: Store<Meal[], favouriteAction> = createStore(
	favoritesReducer,
	preloadedState,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// interface IReduxState {}

// const mstp = (state, {}): IReduxState => {return {}};

// interface IReduxAction {}

// const mdtp = (dispatch, {}): IReduxAction => {return {}};

// export default connect(mstp,mdtp)();

// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class index extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
