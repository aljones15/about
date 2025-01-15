import {Resume} from "./resume";
import {name, address, positions, education, projects} from "./data-model";

export const andrewResume = new Resume({
  name,
  address,
  positions,
  education,
  projects
});