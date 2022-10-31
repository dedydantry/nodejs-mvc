'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'dedy',
        last_name: 'dantry',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
