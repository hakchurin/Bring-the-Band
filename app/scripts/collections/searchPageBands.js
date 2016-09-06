import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import $ from 'jquery';
import Backbone from 'backbone';
import SearchBandModel from '../models/searchBandModel'
import SearchBar from '../searchBar';


const SearchPageBand = Backbone.Collection.extend({
    model: SearchBandModel,

    search: function(term) {
        $.ajax({
                type: 'GET',
                url: `https://api.spotify.com/v1/search`,
                data: {
                    q: term,
                    type: 'artist'
                },
                success: (response) => {
                  this.reset();

                    response.artists.items.forEach((artist) => {
                        if (artist.images[0]) {
                            this.add({
                                artist: artist.name,
                                artistId: artist.id,
                                image: artist.images[0].url,
                                votes: 0
                            })
                        }
                    })
                    this.trigger('update')
                }
        })
}
})


export default SearchPageBand;
