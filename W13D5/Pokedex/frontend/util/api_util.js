import React from 'react';

const onSuccess = ()=>console.log("Success")
const onFail = ()=>console.log("Failure")

function fetchAllPokemon() {
    $.ajax({
        url: '/api/pokemon',
        type: 'GET',
        
    }).then(onSuccess, onFail) 
}

export default fetchAllPokemon;