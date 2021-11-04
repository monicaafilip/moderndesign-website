const INITIAL_STATE = {
    products: [
        {
            title: 'canapea',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            description:'canapea de calitate',
            id: 1
        },
        {
            title: 'dulap',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            description:'dulap exceptional',
            id: 2
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;