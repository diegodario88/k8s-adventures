### NodeJS example for demostrate purpose 

First we need to build our docker image
```sh
docker build -f Dockerfile --tag sample-app:v1 --build-arg NODE_ENV="production" --build-arg PORT=8080 .
```

Then we can run it to make sure everthing is working
```sh
docker run --rm -p 8080:8080 --name sample-app sample-app:v1
```
