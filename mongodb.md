启动 mongodbTo have launchd start mongodb now and restart at login:
brew services start mongodb
停止服务： brew services stop mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf

osx 上命令行连接：
cd /usr/local/Cellar/mongodb/4.0.3_1/bin
./mongo
show dbs
show collections
show tables
db.getCollectionNames()

删除一个数据库
use mydb; 
db.dropDatabase();
