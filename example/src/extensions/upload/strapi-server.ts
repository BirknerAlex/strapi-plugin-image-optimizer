import imageOptimizerService from "strapi-plugin-image-optimizer/dist/server/services/image-optimizer-service";
import { LoadedPlugin } from "@strapi/types/dist/plugin";

module.exports = (plugin: LoadedPlugin) => {
  plugin.services["image-manipulation"] = imageOptimizerService;
  return plugin;
};
