function getMDCode(){
	var data = window.localStorage.getItem("MarDomData");

	if(data==null){
		data = JSON.stringify(mdDefData);
	}
	var res = 
	'<!-- TradingView Widget BEGIN -->                                                                                      '+
    '<div class="tradingview-widget-container">                                                                             '+
    '  <div class="tradingview-widget-container__widget"></div>                                                             '+
    '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>    '+
    '  {                                                                                                                    '+
    '  "symbols": '+data+
    
    ',                                                                                                                   '+
    '  "colorTheme": "light",                                                                                               '+
    '  "isTransparent": true,                                                                                               '+
    '  "showSymbolLogo": true,                                                                                              '+
    '  "locale": "zh_TW"                                                                                                    '+
    '}                                                                                                                      '+
    '  </s'+'cript>                                                                                                            '+
    '</div>                                                                                                                 '+
    '<!-- TradingView Widget END -->                                                                                        ';
	
	return res;
}


function getMarqueeCode(){
	var data = window.localStorage.getItem("MarqueeData");
	if(data==null){
		data = JSON.stringify(marqueeData);
	} 
	var res = 
	'<!-- TradingView Widget BEGIN -->                                                                                                '+
	'<div class="tradingview-widget-container">                                                                                       '+
	'  <div class="tradingview-widget-container__widget"></div>                                                                       '+
	'                                                                                                                                 '+
	'  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>          '+
	'  {                                                                                                                              '+
	'  "symbols":                                                                                                                     '+
	data+
	'  ,                                                                                                                              '+
	'  "showSymbolLogo": true,                                                                                                        '+
	'  "colorTheme": "light",                                                                                                         '+
	'  "isTransparent": true,                                                                                                         '+
	'  "displayMode": "adaptive",                                                                                                     '+
	'  "locale": "zh_TW"                                                                                                              '+
	'}                                                                                                                                '+
	'  </s'+'cript>                                                                                                                      '+
	'</div>                                                                                                                           '+
	'<!-- TradingView Widget END -->                                                                                                  ';
	
	return res;
}


function getMarImgCode(){
	var data = JSON.parse(window.localStorage.getItem("MarketImgData"));

	if(data==null){
		data = marketImgData;
	} 
	var res = '';
	var count = 0;
	$.each(data, function(key,value) {
	  res = res+
	  ' <div class="col-xl-6">                                                                            '+
      '     <div class="card mb-4">                                                                       '+
      '         <div class="card-header">                                                                 '+
      '             <i class="fas fa-chart-area me-1"></i>                                                '+
      '             '+value.description+'                                                                                      '+
      '         </div>                                                                                    '+
      '         <div class="card-body">                                                                   '+
      ' 			                                                  '+
      ' 			<div class="tradingview-widget-container">                                              '+
      ' 			  <div id="tradingview_mImg'+count+'"></div>                                                  '+
      ' 			                                                                                        '+
      ' 			  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></s'+'cript>       '+
      ' 			  <script type="text/javascript">                                                       '+
      ' 			  new TradingView.widget(                                                               '+
      ' 			  {                                                                                     '+
      ' 			  "width": "100%",                                                                      '+
      ' 			  "height": 350,                                                                        '+
      ' 			  "symbol": "'+value.proName+'",                                                          '+
      ' 			  "interval": "240",                                                                    '+
      ' 			  "timezone": "Asia/Taipei",                                                            '+
      ' 			  "theme": "light",                                                                     '+
      ' 			  "style": "1",                                                                         '+
      ' 			  "locale": "zh_TW",                                                                    '+
      ' 			  "toolbar_bg": "#f1f3f6",                                                              '+
      ' 			  "enable_publishing": false,                                                           '+
      ' 			  "hide_top_toolbar": false,                                                            '+
      ' 			  "save_image": false,                                                                  '+
      ' 			  "container_id": "tradingview_mImg'+count+'"                                                 '+
      ' 			}                                                                                       '+
      ' 			  );                                                                                    '+
      ' 			  </s'+'cript>                                                                             '+
      ' 			</div>                                                                                  '+
      ' 			                                                         '+
      ' 		</div>                                                                                      '+
      '     </div>                                                                                        '+
      ' </div>                                                                                            ';
	  count++;
	}); 
	
	
	
	
	return res;
}



function getMarketListCode(){
	var data = window.localStorage.getItem("MarketListData");

	if(data==null){
		data = JSON.stringify(marketListData);
	} 
	var res = 
	'<!-- TradingView Widget BEGIN -->                                                                                                          '+
    '<div class="tradingview-widget-container">                                                                                                 '+
    '  <div class="tradingview-widget-container__widget"></div>                                                                                 '+
    '                                                                                                                                           '+
    '  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async>                  '+
    '  {                                                                                                                                        '+
    '  "width": "100%",                                                                                                                         '+
    '  "height": 450,                                                                                                                           '+
    '  "symbolsGroups": [                                                                                                                       '+
    '	{                                                                                                                                       '+
    '	  "name": "指數",                                                                                                                       '+
    '	  "originalName": "Indices",                                                                                                            '+
    '	  "symbols":'+data+' '+
    '	}                                                                                                                                       '+
    '  ],                                                                                                                                       '+
    '  "showSymbolLogo": true,                                                                                                                  '+
    '  "colorTheme": "light",                                                                                                                   '+
    '  "isTransparent": true,                                                                                                                   '+
    '  "locale": "zh_TW"                                                                                                                        '+
    '}                                                                                                                                          '+
    '  </s'+'cript>                                                                                                                                '+
    '</div>                                                                                                                                     '+
    '<!-- TradingView Widget END -->                                                                                                            ';
	
	
	return res;
}