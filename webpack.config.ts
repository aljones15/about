import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

interface NodeEnv {
  production: boolean;
  development: boolean;
}

const webpackConfig = (env: NodeEnv) => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
	  {
            test: /\.(png|jpe?g|gif)$/,
	    loader: "file-loader"
          },
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
              transpileOnly: true
            },
            exclude: /dist/
          }, {
            test: /\.css$/i,
	    use: ['style-loader', 'css-loader']
          }, {
            test: /\.sass$/i,
	    use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./html/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ESLintPlugin({files: "./src/**/*.{ts,tsx,js,jsx}"})
    ],
    devServer: {
      historyApiFallback: true,
    }
});

export default webpackConfig;