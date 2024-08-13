import {createSlice} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const initialState={
    value:0,
    error:""
}
//const error=useSelector(state => state.counter.value)
//const [error,setError]=useState('')
//const error ="error you reachedy"
export const counterSlice = createSlice({
    name:"counterr",
    initialState,
    reducers:{
        INCR: function (state){
            if (state.value >=5)
            {
               state.error="don't increase"
            }
            else {state.value+=1}
           
        },
        DECR: function (state){
            if(state.value <=0)
            {
                state.error="you reached min value"
            }
            else {state.value-=1}
        },
        RESET: function(state){state.value = 0}
    }
})

export const {INCR,DECR,RESET}=counterSlice.actions
export default counterSlice.reducer
//export const error

export const {error} =counterSlice