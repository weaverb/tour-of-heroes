#!/bin/bash

echo ">>> update/upgrade box"
apt-get update
apt-get upgrade -y

echo ">>> install essentials"
apt-get install -y build-essential libssl-dev libffi-dev python-dev git

echo ">>> install nodejs"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs

echo ">>> install angular2 CLI"
npm install -g @angular/cli
