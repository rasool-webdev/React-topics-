let nextId=0;
export const Add=(message)=>
{
    return{
        type :"ADD",
        payload:{
            id: nextId++,
            text: message
        }
    }
}

export const deleteTodo=(i)=>
{
    return {
        type :"DELETE",
        payload :{
             id:i,
             }
    }
}
export const ToggleTodo=(id)=>
{
    return {
        type: "TOGGEL",
        payload:{
            id:id,
        },
    }

}