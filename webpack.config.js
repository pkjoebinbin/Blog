var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    index:'./src/pages/index/index.js',
    vendor:['./src/js/vue.min.js','vue-resource','./src/js/vue-router.min.js'],
    admin:'./src/pages/admin/admin.js'
  },

  output: {
    path: path.resolve(__dirname, './dist/dists'),
    publicPath: 'dists/',
    chunkFilename:'chunk[id].js',
    filename: '[name][chunkHash:8].js',

    
  },
   

  
  module: {
    rules: [
      
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },

      {
        test:/\.css$/,
        //loader: "style-loader!css-loader"
        loader:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader',
          publicPath:'../',     

        })
        
      },


      {
        test: /\.vue$/,
        loader: 'vue-loader',
       


        
        
        
        options: {
          loader:{
            css:ExtractTextPlugin.extract({
              use:'css-loader!less-loader',
              fallback:'vue-style-loader',
            }),

            
          },

          

          //extractCSS: true,
          /*loaders: {

          },*/
          // other vue-loader options go here
          postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })]
        },
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        //loader: 'file-loader',
       loader: 'url-loader',

        query:{
          limit:15000,
          name:'imgs/[name].[ext]?[hash]',
        }
        /*options: {
          limit:1000,
          mimetype:'[name].[ext]?[hash]',

          //name: '[name].[ext]?[hash]'
        }*/
      }
    ],

    
  
  },

  plugins:[
      new ExtractTextPlugin('./css/styles.css'),
      new webpack.optimize.CommonsChunkPlugin({
        names:["vendor",'manifest']
      }),

      //前台页面模版
      new HtmlWebpackPlugin({
          filename:'../index.html',
          template:'./src/pages/index/indexTemplate.html',
          chunks:["vendor",'manifest','index'],
      }),

      //后台页面模版
       new HtmlWebpackPlugin({
          filename:'../admin.html',
          template:'./src/pages/admin/adminTemplate.html',
          chunks:["vendor",'manifest','admin'],
      }),
  ],
   

 

   




  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },


  devServer: {
    historyApiFallback: true,
    noInfo: true


  },





  performance: {
    hints: false
  },
  devtool: '#eval-source-map',


 




 
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,

    }),

   



  ])
}
