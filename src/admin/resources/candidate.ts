import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const candidateResourceOptions: ResourceOptions = {
  navigation: 'Empresas',
  properties: {
    birth: {
      type: 'date'
    },
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'candidate', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: ['name', 'email','bio','birth','role','curriculumFile','password'],
  filterProperties: ['name', 'email','bio','birth', 'createdAt', 'updatedAt'],
  listProperties: ['name', 'email','bio','birth'],
  showProperties: ['name', 'email','bio' ,'birth','curriculum', 'createdAt', 'updatedAt']
}


export const candidateResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../upload')
      }
    },
    properties: {
      key: 'curriculum',
      file: 'curriculumFile'
    },
    uploadPath: (record, filename) => `curriculum/curriculumUser-${record.get('id')}/${filename}`
  })
]