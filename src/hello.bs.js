

import * as Random from "rescript/lib/es6/random.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Runtime$Bisect from "bisect_ppx/src/runtime/bucklescript/runtime.bs.js";

console.log(Belt_Array.map([
          1,
          2,
          3
        ], (function (a) {
            return a + 1 | 0;
          })));

Runtime$Bisect.write_coverage_data_on_exit(undefined);

Random.self_init(undefined);

if (Random.$$int(2) === 0) {
  console.log("Hello, world!");
} else {
  console.log("We come in peace.");
}

export {
  
}
/*  Not a pure module */
