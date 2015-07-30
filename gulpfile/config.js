var src = "."; //EDIT

var scss_folder = src + "/scss"; //EDIT  
var css_folder = src + "/css";   //EDIT
var js_dist = src + "/js/dist";  //EDIT

module.exports = {
    // scss 的資料夾
    scss_folder: scss_folder,
    // scss 檔案，如果有deep folder則加上去 ex: /**/*.scss
    scss_files: [scss_folder + "/*.scss"],
    // css的資料夾
    css_folder: css_folder,
    // css 檔案
    css_files: [css_folder + "/*.css"],
    // 原始js檔案, 規則是把input的js路徑寫下; output寫這個js輸出後要叫啥; destination寫輸出位置
    scripts: [
        {
            input      : [src + '/js/index.js'],
            output     : 'index.js',
            destination: js_dist
        }
    ],
    // browserify 後的檔案script
    scripts_dist: [js_dist + "/*.js"],

    // 放html or hbs的地方
    views: {
        files: [src + "/*.html"],
        hbs: [src + "/*.hbs"]
    },

    canner: {
        files: [src + "/canner.json"]
    },
    // browser-sync 要去聽哪個位置
    // value=> false: 會聽取 ./ 位置下的檔案變動; proxy: 如"localhost:8080"
    proxy: false 
};