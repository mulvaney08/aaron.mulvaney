import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const base = isGithubActions && repository ? `/${repository}/` : "/";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? "https://example.com",
  base
});
