nodejs_cross_domain
===================

nodejs cross domain to request some website API
NodeJS 跨域访问

install nodejs and forever
-------
install nodejs
http://nodejs.org

install forever
<code>$ npm install -g forever</code>

test server.js
--------------
<pre><code>$ node server.js
$ forever server.js</code></pre>

add .sh to startup services
---------------------------
<pre><code>$ chmod +x /etc/init.d/forever_start.sh
$ chkconfig --add /etc/init.d/forever_start.sh</code></pre>

test shell
----------
<code>$ . ./forever_startup.sh start</code>
