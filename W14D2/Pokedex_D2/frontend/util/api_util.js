import React from 'react';

export const fetchAllPokemon = function() {
    return $.ajax({
        url: '/api/pokemon',
        type: 'GET',
    })
};

