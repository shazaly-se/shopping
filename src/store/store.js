import {createStore,combineReducers} from 'redux'
import cartReducer from './reduceres'
import throttle from 'lodash.throttle';
function loadState (){

    try{
        const state = localStorage.getItem('cart');
        if(state !==null)
        {
            return JSON.parse(state);
        }
    }catch (e)
    {

    }

    return {
        cart: []
    
    }
}

function saveState(state){
    localStorage.setItem('cart',JSON.stringify(state));
}

const appReducers= combineReducers({
    cart:cartReducer
})

const store= createStore(appReducers,loadState(),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() =>{
    saveState(store.getState())
}),2000);

export default store;