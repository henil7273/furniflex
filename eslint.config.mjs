import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Extend Next.js defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Override or disable rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // disable the 'any' rule
      // You can add more overrides here, for example:
      // "react-hooks/exhaustive-deps": "warn",
      // "no-console": "off"
    },
  },
];

export default eslintConfig;
