import type { Core } from "@strapi/strapi";
import { Config } from "../models";
import pluginId from "../utils/pluginId";

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  settings(): Config {
    return strapi.config.get(`plugin::${pluginId}`);
  }
});

export default service;