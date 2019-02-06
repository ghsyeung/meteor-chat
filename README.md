# Basic Chatroom 

Use [`ngrok`](https://ngrok.com/) to get a domain name

```
ngrok http 5000
```

It'll show 

```
Session Status                online
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://4c07d982.ngrok.io -> localhost:5000
```

Then run the meteor app, using

```
yarn start --port 5000
```

And you can access the chatroom at `http://4c07d982.ngrok.io`
