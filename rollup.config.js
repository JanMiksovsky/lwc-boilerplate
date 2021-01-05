import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";
import path from "path";

export default {
  input: path.resolve("src/main.js"),
  output: {
    file: path.resolve("public/build/main.js"),
    format: "module",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    lwc(),
  ],
};
