let lastId = 0;
//business logic implementation

//need to initialize state. need to be state = [] in parameter
export default function reducer (state = [], action) {
    if(action.type === 'increment')
    return [
        ...state,
        {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        }
    ];
    else if (action.type === 'decrement')
    return state.filter (bug => bug.id !== action.payload.id)

    return state;
}