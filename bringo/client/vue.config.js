module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
            },
        },
    },
  },
}