ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose up --build

build_prod:
	docker-compose -f docker-compose.prod.yaml up --build

up:
	docker-compose up

down: 
	docker-compose down

prune:
	docker image prune

check_config:
	docker-compose config

volume:
	docker volume inspect memories_mongodb-data