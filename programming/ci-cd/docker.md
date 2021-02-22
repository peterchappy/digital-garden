# Docker

###ENV vs ARG

> ENV is mainly meant to provide default values for your future environment variables. Running dockerized applications can access environment variables. It’s a great way to pass configuration values to your project.
>
> ARG values are not available after the image is built. A running container won’t have access to an ARG variable value. You can imagine the ARG and ENV as two overlapping rectangles:

![](/assets/arg_env.png)

[source](https://vsupalov.com/docker-arg-vs-env/)

