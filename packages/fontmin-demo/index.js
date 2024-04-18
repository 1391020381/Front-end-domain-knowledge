var Fontmin = require('fontmin');

var fontmin = new Fontmin()
    .src('./fonts/*.ttf') // 字体文件路径
    .use(Fontmin.glyph({ // 要裁剪的字形
        text: '0123456789游戏正在全力加载中，请稍后……' 
    }))
    .dest('minFonts'); // 输出路径

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    console.log('字体裁剪完成');
});