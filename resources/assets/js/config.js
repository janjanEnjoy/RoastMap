/*和 .env 类似，config.js 对多环境前端开发来说非常重要，
将所有的 JavaScript 环境配置信息都放在了这个文件中。
目前只需要配置一个变量用于标识不同环境下 API URL 的前缀 —— api_url*/

/**
 * Defines the API route we are using.
 */
var api_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://myroast.com/api/v1';
        break;
    case 'production':
        api_url = 'http://roast.demo.laravelacademy.org/api/v1';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}