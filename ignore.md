## DOCKER POSTGRES COMMAND

- docker run -e POSTGRES_PASSWORD=PASSWORD1234 -p 5432:5432 postgres

## CD pipeline file

- clone the repo to machine 
    - actions/checkout@v2
- login to dockerhub
- run docker build
- run docker push
- 