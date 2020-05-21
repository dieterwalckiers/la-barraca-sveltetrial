import config from "./config";
export function getConfig() {
  const key = process.env.NODE_ENV === "development" ? "development" : "default";
  return config[key];
}

