/* eslint-disable */
import { build } from "esbuild";
import { Glob } from "glob";

const glob = new Glob("./graphql/modules/**/*.ts", { sync: true });

const files = glob.walkSync();

console.log("Building files:");
console.log(files);

await build({
  format: "esm",
  target: "esnext",
  platform: "node",
  external: ["@aws-appsync/utils"],
  outdir: "./graphql/resolvers",
  entryPoints: files,
  bundle: true,
});

console.log("Build complete");
