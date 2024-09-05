var val;

const setToken = (e)=>{
    val = e;
    console.log(`Val: ${val}`)
}

const getToken = ()=>{
    return val;
}

export default {setToken, getToken}

