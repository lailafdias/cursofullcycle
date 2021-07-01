FROM golang:1.16.5-alpine3.14 as build
WORKDIR /
COPY . .

RUN go build hello_world.go

FROM scratch
WORKDIR /tmp
COPY --from=build /hello_world /tmp/hello_world

CMD ["/tmp/hello_world"]



