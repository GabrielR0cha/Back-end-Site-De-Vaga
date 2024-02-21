import { ResourceOptions } from "adminjs";

export const companiesResourceOptions: ResourceOptions = {
  navigation: 'Empregos',
  editProperties: ['name', 'bio','website','email'],
  filterProperties: ['name', 'bio','website','email' , 'createdAt', 'updatedAt'],
  listProperties: ['name', 'bio','website','email'],
  showProperties: ['name', 'bio','website','email' , 'createdAt', 'updatedAt']
}