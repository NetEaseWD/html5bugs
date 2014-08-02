var gulp = require("gulp"),
  shell = require('gulp-shell'),
  deploy = require("gulp-gh-pages");

gulp.task('build',  shell.task(['gitbook build .']));

gulp.task('deploy',['build'] ,function () {
  gulp.src("_book/**/*.*")
    .pipe(deploy({
      remoteUrl: "git@github.com:neteasewd/html5bugs"
    }))
    .on("error", function(err){
      console.log(err)
    })
});


