import {Resume} from "./resume.ts";
import {name, address, positions, education} from "./data-model.ts";

export andrewResume = new Resume({
  name,
  address,
  positions,
  education
});