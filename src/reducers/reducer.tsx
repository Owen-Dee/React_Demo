const initState = {
    text: 'Hello'
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text === 'Hello' ? 'world' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'Hello worls'
            }
        default:
            return initState
    }
}

export default reducer;