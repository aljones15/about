import {Resume} from "../classes/Resume";
import {
  name, address, positions
} from "./data-model";
import {
  schools,
  degrees,
  certificates
} from "./education";
import {projects} from "./projects";

export const andrewResume = new Resume({
  name,
  address,
  degrees,
  positions,
  schools,
  certificates,
  projects
});
