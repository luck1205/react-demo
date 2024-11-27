import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
    name:'counter',
    initialState:{
        count:0,
        nameStore:'s'
    },
    reducers:{
        inscrement(state){
            state.count++
        },
        descrement(state){
            state.count--
        },
        addToNum(state,actions){
            state.count = actions.payload.count
        }
    }
})

const {inscrement,descrement,addToNum} = counterStore.actions

const reducers = counterStore.reducer

export {inscrement,descrement,addToNum}
export default reducers