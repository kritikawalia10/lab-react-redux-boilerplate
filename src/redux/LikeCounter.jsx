
import {createStore} from 'redux';
import reducer from './Reducer';
import { useState } from 'react';
import { Increment,Decrement } from './Action';

const Store = createStore(reducer)

const LikeCounter = () => {

    const [likes, setLikes] = useState(Store.getState().like);

    const increase = () => {
        Store.dispatch(Increment());
        setLikes(Store.getState().like);
      };
      
      const decrease = () => {
        Store.dispatch(Decrement());
        setLikes(Store.getState().like);
      };

    return(
        <div>
            <h1>{likes}</h1>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}

export default LikeCounter;