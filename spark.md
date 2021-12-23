osx安装java
brew install java
sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
echo 'export PATH="/usr/local/opt/openjdk/bin:$PATH"' >> ~/.zshrc
export CPPFLAGS="-I/usr/local/opt/openjdk/include"
-


Install Scala and Apache Spark on MacOS
https://medium.freecodecamp.org/installing-scala-and-apache-spark-on-mac-os-837ae57d283f

要想从py文件调用pyspark，特别注意：spark 2.4.4 不支持高版本的java，最好是1.8
先从本机查看java版本：/usr/libexec/java_home -V ，然后到~/.bash_profile里面设置：
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
export PYSPARK_SUBMIT_ARGS="--master local[2] pyspark-shell"
export PYSPARK_PYTHON=python3
-
https://stackoverflow.com/questions/23256536/importing-pyspark-in-python-shell