//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '你真是一个美好的人类';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '♪-嘿朋友-欢迎回来-！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});