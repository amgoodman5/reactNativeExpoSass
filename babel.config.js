module.exports = function(api) {
  api.cache(true);
  return {

    //Configured scss modules for babel
      "presets": ["module:metro-react-native-babel-preset"],
      "plugins": [
        "react-native-classname-to-style",
        [
          "react-native-platform-specific-extensions",
          {
            "extensions": ["scss", "sass"]
          }
        ]
      ]
  };
};
