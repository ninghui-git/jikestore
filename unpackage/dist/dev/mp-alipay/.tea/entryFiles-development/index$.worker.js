if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/goodlist/goodlist?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list-item/uni-list-item?hash=4111c4d8aadbade8dd2f88314a2f6663f521f29a');
require('../../components/uni-ui/uni-goods-nav/uni-goods-nav?hash=910655f697ed4566873b02c5c15edcd2398571e0');
require('../../pages/index/index?hash=ecea47dadfba7abc2f1bd9c906e7464a31fed6c0');
require('../../pages/news/news?hash=b6121b5f7f692767500d0ab81f5e5356729a8d9d');
require('../../pages/member/member?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods/goods?hash=3fed0ad4e642d880a72433769ac46bcc8f8c7060');
require('../../pages/pics/pics?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/contact/contact?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/videos/videos?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/newsdetail/newsdetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goodsdetail/goodsdetail?hash=26f7fc5291a9fe61da04a2885d59ff85838e7c6d');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}