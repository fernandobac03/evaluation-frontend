#!/bin/bash

docker stop evaluationlinksfront
docker rm evaluationlinksfront

docker run -d  --name evaluationlinksfront -p 4200:4200 evaluationlinksfront
