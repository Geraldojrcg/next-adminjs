import { getBaseUrl } from "@/utils/url";
import AdminJS, { type AdminJSOptions } from "adminjs";

export const options: AdminJSOptions = {
  assetsCDN: process.env.NODE_ENV === "production" ? getBaseUrl() : undefined,
  rootPath: "/admin",
  branding: {
    logo: false,
    companyName: "My Company",
    withMadeWithLove: false,
  },
};

export const adminJs = new AdminJS(options);
