module.exports = (api, options, rootOptions) => {
  // modify package.json fields
  if (typeof rootOptions === 'undefined') {
    api.options.pkgName = api.generator.pkg.name
  } else if (typeof rootOptions.projectName === 'undefined') {
    api.options.pkgName = api.generator.pkg.name
  } else {
    api.options.pkgName = rootOptions.projectName
  }

  api.extendPackage({
    scripts: {
      publish: './build/publish.sh'
    }
  })

  // console.log(api.generator.plugins)

  // options.outputDir = path.resolve(projectOptions.outputDir + '/' + pathsConfig.build.path)

  // copy and render all files in ./template with ejs
  // console.log(api)
  api.render('./template')

  // if (options.foo) {
  //   // conditionally generate files
  // }
}
