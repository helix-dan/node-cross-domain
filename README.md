nodejs_cross_domain
===================

nodejs cross domain to request some website API

install nodejs and forever
-------
install nodejs
http://nodejs.org

install forever
$ npm install forever

text server.js
--------------
nodejs ./server.js
forever ./server.js

add .sh to startup services
---------------------------
chmod +x /etc/init.d/forever_start.sh
chkconfig --add /etc/init.d/forever_start.sh

text shell
--------
$ . ./forever_startup.sh start
