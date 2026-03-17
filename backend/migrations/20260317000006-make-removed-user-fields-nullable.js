'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop unique constraint on whatsapp (added by migration 005)
    await queryInterface.removeConstraint('users', 'unique_user_whatsapp').catch(() => {
      // Ignore if it doesn't exist
    });

    // Make company, position, whatsapp, secondaryEmail nullable (they were NOT NULL before)
    await queryInterface.changeColumn('users', 'company', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('users', 'position', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('users', 'whatsapp', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // secondaryEmail was already nullable, but ensure it stays that way
    await queryInterface.changeColumn('users', 'secondaryEmail', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert: make them NOT NULL again (requires data to exist for company/position/whatsapp)
    await queryInterface.changeColumn('users', 'company', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'position', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('users', 'whatsapp', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addConstraint('users', {
      fields: ['whatsapp'],
      type: 'unique',
      name: 'unique_user_whatsapp',
    });
  },
};
