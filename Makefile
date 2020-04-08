NAME=hexbot
VERSION=latest
SH=ash

TAG=$(NAME):$(VERSION)

.PHONY: build
build:
	-@make -s stop
	docker build --tag $(TAG) .

.PHONY: start
start:
	docker run -it -d -v "%CD%":/workspace --name $(NAME) $(TAG) $(SH)

.PHONY: stop
stop:
	docker rm -f -v $(NAME)

.PHONY: exec
exec:
	docker exec -it $(NAME) $(SH)

.PHONY: clean
clean:
	docker rmi -f $(NAME)
