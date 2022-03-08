'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('teams',[
     {
      full_name:'Havelock SC',
      short_name: 'HSC',
      color:'#345464',
      logo:'havelocksc.png'
     },
     {
      full_name:'Kandy SC',
      short_name: 'KSC',
      color:'#3434364',
      logo:'kandysc.png'
     }
   ]);
  },

   down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('teams',{},null)
  }
};
