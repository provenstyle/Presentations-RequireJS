{
   baseUrl: "C:\\Presentations\\RequireJs\\SimpleRequireJs\\SimpleRequireJs\\Scripts\\app",
   mainConfigFile: "C:\\Presentations\\RequireJs\\SimpleRequireJs\\SimpleRequireJs\\Scripts\\app\\main.js",
   include: [
      "config",
      "logger",
      "main",
      "messageGenerator",
      "random"
   ],
   exclude: [],
   keepBuildDir: true,
   optimize: "uglify2",
   out: "C:\\Presentations\\RequireJs\\SimpleRequireJs\\SimpleRequireJs\\appbuilt\\main.js",
   pragmas: {
      build: true
   },
   wrap: true,
   insertRequire: [
      "main"
   ]
}