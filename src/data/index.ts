import {Resume} from "../classes/Resume";
import {
  name, address, positions, projects
} from "./data-model";
import {
  schools,
  degrees,
  certificates
} from "./education";

export const andrewResume = new Resume({
  name,
  address,
  degrees,
  positions,
  schools,
  certificates,
  projects
});
