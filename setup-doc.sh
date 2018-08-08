#!/usr/bin/env bash

# Add stable NodeJS repo
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

# Install dev tools, NodeJS, Rudy, and zlib
sudo apt install -y build-essential nodejs ruby ruby-dev zlib1g-dev

# Install Bundler to manage site dependencies
sudo gem install bundler

# Install gems to run Jekyll
bundle install 
