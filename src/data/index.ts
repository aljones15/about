import {Resume} from "./resume";
import {name, address, degrees, certificates, positions, schools, projects} from "./data-model";

export const andrewResume = new Resume({
  name,
  address,
  degrees,
  positions,
  schools,
  certificates,
  projects
});