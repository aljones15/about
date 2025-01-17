import {Resume} from "./resume";
import {name, address, certificates, positions, education, projects} from "./data-model";

export const andrewResume = new Resume({
  name,
  address,
  positions,
  education,
  certificates,
  projects
});