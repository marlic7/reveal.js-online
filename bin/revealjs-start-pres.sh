#!/usr/bin/env bash
PWD=$(pwd)

docker run -it --rm -p 8001:8001 -v "${PWD}":/app/data marlic/reveal.js-online:1.0.2
