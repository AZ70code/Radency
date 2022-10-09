//get current note's key
import { TABLE } from "../../constans/elements";

function getCurrentKey() {
    let keys = Array.from(TABLE.keys());
    return Math.max.apply(null, keys);
}
export default getCurrentKey;