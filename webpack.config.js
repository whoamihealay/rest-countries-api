const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
const target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HTMLWebpackPlugin({ template: "./public/index.html" }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode,

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  target,

  plugins,

  devtool: false,

  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },

  devServer: {
    port: 3000,
    hot: true,
    static: path.resolve(__dirname, "public"),
  },
};
