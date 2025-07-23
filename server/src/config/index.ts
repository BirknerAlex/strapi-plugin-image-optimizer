import { Config } from "../models";
import configSchema from "./schema";
import pluginId from "../utils/pluginId";

export default {
  default: () => {},
  validator(config: Config) {
     configSchema.validate(config);
  },
  pluginName: pluginId,
};
