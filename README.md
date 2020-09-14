# Ackee Analytics Plugin for VuePress

This project helps to integrate [Ackee Analytics](https://ackee.electerious.com/) in your [VuePress](https://vuepress.vuejs.org/) site. Ackee is a self-hosted, [privacy-friendly alternative to Google Analytics](https://github.com/spekulatius/awesome-privacy-friendly-web-analytics).


## Install

For installation instructions on how to get Ackee up and running check [this](https://docs.ackee.electerious.com/#/docs/Get%20started).

To install the VuePress plugin run one of the following commands:

```sh
npm install vuepress-plugin-ackee

# or

yarn add vuepress-plugin-ackee
```


## Configuration

Add the vuepress plugin in your site or theme config file. The configuration is done as part of the plugin-configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: [
    'ackee': { trackerUrl: 'https://link-to-your-ackee-instance.project.com', siteId: '12ab12ab-12ab-12ab-12ab-12ab12ab12ab' }

    // other plugins
    // ...
  ]
}
```

You will get parameters required from your Ackee instance.

*Please note:* The URL in the configuration shouldn't include `/_.js`.


For more details on how to work with VuePress plugins check the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is release under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
