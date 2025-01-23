import {Resume} from "../classes/Resume";
import { name, address } from "./address";
import { positions } from "./positions";
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
