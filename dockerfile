FROM openjdk:11
WORKDIR /app
ENV domain=http://localhost:8000
COPY ./budgie-*.jar ./stasher.jar
ENTRYPOINT ["java","-jar","./budgie.jar"]
EXPOSE 8080