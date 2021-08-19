/**
 * This file contains functions for listing servers from the ones available.
 * It calls the internal API for retrieving registered servers by region, 
 * distance, ping, health, etc.
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