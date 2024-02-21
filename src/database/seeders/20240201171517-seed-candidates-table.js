
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [{
      name: 'Fulano de Tal',
      email: 'fulano@example.com',
      birth: new Date('1990-01-01'),
      curriculum: 'caminho/para/curriculo.pdf',
      password: 'senha123',
      role: 'user',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      phone: '123456789',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Admin Admin',
      email: 'admin@example.com',
      birth: new Date('1980-01-01'),
      curriculum: 'caminho/para/curriculo-admin.pdf',
      password: 'admin123',
      role: 'admin',
      bio: 'Admin bio.',
      phone: '987654321',
      open_to_work: false,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Ciclano de Tal',
      email: 'ciclano@example.com',
      birth: new Date('1995-01-01'),
      curriculum: 'caminho/para/curriculo-ciclano.pdf',
      password: 'ciclano123',
      role: 'user',
      bio: 'Ciclano bio.',
      phone: '555555555',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {});
  }
};
