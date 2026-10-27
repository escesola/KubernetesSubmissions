# Log output

Generates a random string (UUID) on startup, keeps it in memory and prints it every 5 seconds with a timestamp:

```
2026-10-27T20:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2026-10-27T20:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```

## Run locally

```bash
node index.js
```

## Build and push the image

```bash
docker build -t YOUR_DOCKERHUB_USER/log-output:1.1 .
docker push YOUR_DOCKERHUB_USER/log-output:1.1
```

## Deploy to the cluster

```bash
k3d cluster create -a 2
kubectl create deployment log-output-dep --image=YOUR_DOCKERHUB_USER/log-output:1.1
kubectl get pods
kubectl logs -f deployment/log-output-dep
```
