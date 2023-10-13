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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
            extensions: [".js", ".jsx"]
        },
        use: {
            loader: "babel-loader"
}
},
    {
        test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]
    },
        {
            test: /\.(jpg|png|svg|gif)$/,
            type: "asset/resource"
        },
]},
plugins: [htmlPlugin]
};
