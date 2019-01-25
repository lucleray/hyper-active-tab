const defaultConfig = {
  symbol: '▲',
  color: '#fff'
}

module.exports.decorateConfig = config => {
  let _activeTab = config.activeTab

  if (typeof _activeTab === 'string') {
    _activeTab = { symbol: _activeTab }
  } else if (typeof _activeTab !== 'object') {
    _activeTab = {}
  }

  const activeTab = Object.assign({}, defaultConfig, _activeTab)

  let css = config.css || ''

  css += `
    .tabs_nav li span span:before { 
      content: "${activeTab.symbol} ";
      color: ${activeTab.color};
      opacity: 0;
    }
    .tabs_nav .tab_active span span:before { 
      opacity: 1 !important; 
    }
  `

  config.css = css

  return config
}
