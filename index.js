const path = require('path')

module.exports = (api, projectOptions) => {
  const options = {
    themeName: api.service.pkg.name
  }

  const pathsConfig = {
    build: {
      // Template for index.html
      // index: path.resolve(__dirname, './html/wp-content/themes/' + options.themeName + '/index.php'),
      index: './index.php',

      // Output directory
      path: './wp-content/themes/' + options.themeName + '',

      // Asset directory
      assetsPublicPath: '/wp-content/themes/' + options.themeName + '/'
    },
    dev: {
      // Asset directory
      assetsPublicPath: '/'
    }
  }

  projectOptions.outputDir = path.resolve(projectOptions.outputDir + '/' + pathsConfig.build.path)

  api.chainWebpack(config => {
    const assetPath = process.env.NODE_ENV === 'production'
      ? pathsConfig.build.assetsPublicPath
      : pathsConfig.dev.assetsPublicPath

    config.output
      .publicPath(assetPath)

    config.plugin('html').tap(args => {
      return [{
        filename: pathsConfig.build.index
      }]
    })
  })
}
