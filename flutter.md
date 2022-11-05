解决Flutter遇到的NO_PROXY does not contain问题
https://zhuanlan.zhihu.com/p/474652737

HTTP host not reachable
https://juejin.cn/post/7106053051714109471



安装dart如果下载被墙：
https://shockerli.net/post/homebrew-install-download-error/

遇到：“Waiting for another flutter command to release the startup lock”
killall -9 dart

如果太慢了：
    打开Flutter SDK： /Users/abel/Library/flutter/packages/flutter_tools/gradle/flutter.gradle 

// google()
// jcenter()
maven{ url 'https://maven.aliyun.com/repository/google'} 
maven{ url 'https://maven.aliyun.com/repository/gradle-plugin'} 
maven{ url 'https://maven.aliyun.com/repository/public'} 
maven{ url 'https://maven.aliyun.com/repository/jcenter'}


flutter config --android-sdk /Users/abel/Library/Android/sdk
    在我osx上运行到android模拟器：
flutter emulators --launch Pixel_API_22
flutter run


修改bash_profile
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn


减少所有工程大小
https://stackoverflow.com/questions/56711605/reducing-flutter-project-sizes
find . -name "pubspec.yaml" -execdir flutter clean \;


临时使用本地代理，关闭命令行就不行了：
export ALL_PROXY=socks5://127.0.0.1:1086
socks不管用时候：
export http_proxy=http://127.0.0.1:1087
export https_proxy=http://127.0.0.1:1087
如果使用了代理，在调试web版本时候需要：export NO_PROXY=127.0.0.1,localhost