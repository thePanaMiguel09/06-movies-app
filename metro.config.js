const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname);

// Añadir configuración de NativeWind
config = withNativeWind(config, { input: "./app/global.css" });

// Añadir configuración de Reanimated
config = wrapWithReanimatedMetroConfig(config);

module.exports = config;
