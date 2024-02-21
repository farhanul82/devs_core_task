import { dummy_data } from "./Data";
import {v4 as uuidv4} from 'uuid';


export const handleFindCheckedData = (id) => {
  return dummy_data.find((data) => data.id === id);
};

export const randomId = uuidv4()
