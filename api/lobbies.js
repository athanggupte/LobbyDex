/**
 * This file contains functions for listing lobbies from the ones available.
 * It calls the internal API for retrieving registered lobbies by region, 
 * distance, game mode, player count, etc.
 * 
 * @author Athang Gupte
 */

'use strict';

// Imports


// Application

const lobbies = {
    
    getLobbiesInRegion: (region) => {
            return [
                {
                    id: 1,
                    server: 'none',
                }
            ];
        }
    ,

    getLobbiesByPing: () => {
        return [
            {
                id: 1,
                server: 'none',
            }
        ];
    }

};


module.exports = lobbies;