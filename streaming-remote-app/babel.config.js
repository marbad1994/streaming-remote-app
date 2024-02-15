module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    ignore: [
      "server/"
    ],
    plugins: [
      ["babel-plugin-module-resolver",
        {
          "alias": {
            "@src": "./src",
            "@components": "./src/components",
          }
        }
      ]
    ]
  };
};
