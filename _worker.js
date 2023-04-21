export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="yxlk7-my.sharepoint.com";  //你需要反代的域名
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
    }
  };
