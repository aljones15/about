import {Resume} from "./resume";
import {name, address, positions, education} from "./data-model";

export const andrewResume = new Resume({
  name,
  address,
  positions,
  education
});