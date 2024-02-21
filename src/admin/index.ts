
import AdminJs from "adminjs";
import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { brandingOptions } from "./branding";
import { adminJsResources } from "./resources";
import { authtenticationOptions } from "./authtenticationOptions";


AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
  databases: [sequelize],
  resources: adminJsResources,
  rootPath: "/admin",
  branding: brandingOptions,
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authtenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
