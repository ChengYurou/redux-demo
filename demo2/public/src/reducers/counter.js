export default function (state=0,action) {
    if(action.type == 'ADD') {
        state += 1;
    }
    return state;
}