/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("WayHome", {
      path: "apps/wayhome"
    });

    new sst.aws.Nextjs("WayShuttle", {
      path: "apps/wayshuttle"
    });
  },
});
