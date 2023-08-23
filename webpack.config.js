const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    stats: "minimal",
    mode: 'development',
    output: {
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
    module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
}
},
    {
        test: /\.css$/,
            use: ["style-loader”, “css-loader"]
    }
]},
plugins: [htmlPlugin]
};