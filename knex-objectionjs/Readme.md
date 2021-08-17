Docker Integration:

https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5

```dockerfile
docker run -d \
--name dev-postgres \
-e POSTGRES_PASSWORD=Pass2020! \
-v ${HOME}/postgres-data/:/var/lib/postgresql/data \
-p 5432:5432 \
postgres

docker run \
-p 80:80 \
-e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' \
-e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' \
--name dev-pgadmin \
-d dpage/pgadmin4

```