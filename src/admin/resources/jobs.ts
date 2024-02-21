import { ResourceOptions } from "adminjs";

export const jobsResourceOptions: ResourceOptions = {
  navigation: 'Empregos',
  editProperties: ['title', 'description','limit_date','company_id'],
  filterProperties: ['title','limit_date','company_id' , 'createdAt', 'updatedAt'],
  listProperties: ['title', 'description','limit_date','company_id'],
  showProperties: ['title', 'description','limit_date','company_id' , 'createdAt', 'updatedAt']
}