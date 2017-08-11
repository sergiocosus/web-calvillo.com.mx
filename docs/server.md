Compile app for server 
```
ENV=local npm run build-server
```


Install pm2 Process Manager
```
sudo npm install -g pm2
```

Start process
```
pm2 start node ./dist-server/server-webpack.js
```

Keep running even if restart
```
pm2 startup
```
and run the command

http://blog.danyll.com/setting-up-express-with-nginx-and-pm2/