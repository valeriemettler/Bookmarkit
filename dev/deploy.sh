#!/usr/bin/env sh
echo "woohoo! we are deploying Bookmarkit!!!"
rsync -av --exclude=.git /Users/LOGIN/code/bookmarker/* leia:/home/valerie/prj/bookmarkit
echo ""
