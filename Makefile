NAME=hexbot
VERSION=latest

TAG=$(NAME):$(VERSION)

.PHONY: build
build:
	-@make -s stop
	@echo *** docker build
	@docker build --tag $(TAG) .

.PHONY: start
start:
	@echo *** docker run
	@docker run --interactive --tty --detach --volume "%CD%":/workspace --name $(NAME) \
		$(TAG) ash

.PHONY: stop
stop:
	@echo *** docker rm
	docker rm --force --volumes $(NAME)

.PHONY: exec
exec:
	@echo *** docker exec
	@docker exec --interactive --tty $(NAME) /bin/ash

.PHONY: clean
clean:
	@echo *** docker rmi
	@docker rmi --force $(NAME)
