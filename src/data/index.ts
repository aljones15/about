import {Resume} from "./resume";
import {name, address, certificates, positions, schools, projects} from "./data-model";

export const andrewResume = new Resume({
  name,
  address,
  positions,
  schools,
  certificates,
  projects
});