## HELM 

(Helm)[https://helm.sh/] is a package manager for Kubernetes. We will use it to deploy our Kubernetes Dashboard and a sample-app written in NodeJS.

#### Install it with your distro PM

```sh
sudo dnf install helm
```

#### Add Chart Repo
Helm employs a chart file to facilitate the deployment of various applications. Within these chart files, you can find the configuration settings for the application, which encompass the controller, service, secret, and other essential resources required for running the application.

A repository serves as a collection of accessible chart files that can be utilized for deployment purposes.


```sh
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
```

#### Deploy Dashboard

```sh
helm install dashboard kubernetes-dashboard/kubernetes-dashboard -n kubernetes-dashboard --create-namespace
```

#### Deploy Sample App

```sh
helm install sample-app ./helm/sample-app --set service.type=NodePort --set service.nodePort=31234
```
