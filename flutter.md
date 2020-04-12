安装dart如果下载被墙：
https://shockerli.net/post/homebrew-install-download-error/


如果太慢了：
    打开Flutter SDK： /flutter/packages/flutter_tools/gradle/flutter.grale
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