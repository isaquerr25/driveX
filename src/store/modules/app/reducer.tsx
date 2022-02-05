import Types from './types';
import Product from 'immer';

const INITIAL_STATE ={
    user: {
        fbId: null,
        nome: null,
        email: null,
        tipo: 'M',
        accessToken: null,
    }
};


function App(state = INITIAL_STATE, action) {
    switch (action.types) {
    case Types.UPDATE_USER: 
        return Product(state,(draft) =>{
            draft.user = {...state.user, ...action.user};
        });
    }
    return (state);
}

export default App;

















