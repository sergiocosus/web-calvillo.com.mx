Compile app for server 
```
ENV=local npm run build:ssr
```


Install pm2 Process Manager
```
sudo npm install -g pm2
```

Start process
```
pm2 start  ./dist/server.js
```

Keep running even if restart
```
pm2 startup
```
and run the command


Nginx configuration example
```


server {
    listen 80;
    server_name app;

    root /home/app/my-app/current/dist;

    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff|woff2|ttf|eot|txt)$  {
        root /home/app/my-app/current/dist;
        try_files $uri 404;
    }

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://127.0.0.1:5000/;
        proxy_redirect off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    
        proxy_redirect off;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}

```


http://blog.danyll.com/setting-up-express-with-nginx-and-pm2/
