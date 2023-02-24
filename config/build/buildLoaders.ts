import { BuildOptions } from "./types/config";
import { loader as MiniCssExtractPluginLoader } from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPluginLoader,
      "css-loader",
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
