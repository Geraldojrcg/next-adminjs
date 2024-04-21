import { bundle } from "@adminjs/bundler";
import { adminJs } from "./src/admin/setup";

(async () => {
  await bundle({
    componentLoader: adminJs.componentLoader,
    destinationDir: "public",
  });
})();
