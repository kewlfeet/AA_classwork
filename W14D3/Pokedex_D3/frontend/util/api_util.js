// import React from 'react';

export const fetchAllPokemon = function() {
    return $.ajax({
        url: '/api/pokemon',
        type: 'GET',
    })
};

export const fetchSinglePokemon = function(pokemonId) {
    return $.ajax({
        url: `/api/pokemon/${pokemonId}`,
        type: 'GET',
    })
};
