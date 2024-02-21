import { ResourceWithOptions } from "adminjs";
import { Candidate, Company, Job } from "../../models";
import { candidateResourceFeatures, candidateResourceOptions } from "./candidate";
import { companiesResourceOptions } from "./companies";
import { jobsResourceOptions } from "./jobs";


export const adminJsResources: ResourceWithOptions[] = [
{
  resource: Job,
  options:jobsResourceOptions,

},
{
  resource:Candidate,
  options:candidateResourceOptions,
  features:candidateResourceFeatures
},
{
  resource:Company,
  options:companiesResourceOptions
}
]