import imageOptimizerPlugin from "strapi-plugin-image-optimizer/strapi-server";
import { LoadedPlugin } from "@strapi/types/dist/plugin";

module.exports = (plugin: LoadedPlugin) => {
  plugin.services["image-manipulation"] = imageOptimizerPlugin.services.service;
  return plugin;
};
