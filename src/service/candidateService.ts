import { Candidate,CandidateCreationAttributes } from "../models/candidate"



export const candidateService = {
  findByEmail: async (email: string) => {
    const candidate = await Candidate.findOne({
      attributes: [
        'id',
        'name',
        'phone',
        'birth',
        'bio',
        'curriculum',
        'email',
        'password'
      ],
      where: { email }
    })
    return candidate
  },


  create:async (attributes:CandidateCreationAttributes) => {
    const candidate = await Candidate.create(attributes)
    return candidate
  },

  update:async (id:number,attributes:{
    name:string
    birth:Date
    curriculum:string
    bio:string
    phone:string
    openToWork:boolean
  }) => {
    
    const [affectedRows, updatedCandidate] = await Candidate.update(attributes, { where: { id }, returning: true })

    return updatedCandidate[0]
  },

  findUniqueCandidate:async (id:number) => {
    const candidate = await Candidate.findByPk(id,{"include":"jobs"});
    return candidate
  },

  delete:async (id:number) => {
    await Candidate.destroy({
      where: { id: id },
    });
  }


  
  }
