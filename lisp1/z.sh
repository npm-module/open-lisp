#! /usr/bin/env bash
set -uvx
set -e
cd "$(dirname "$0")"
cwd=`pwd`
ts=`date "+%Y.%m%d.%H%M.%S"`
yt-dlp \
  -S "res:1080" \
  --sleep-interval 10 \
  --write-sub \
  --sub-lang en \
  --embed-subs \
  --add-metadata \
  --postprocessor-args "-metadata album=https://youtu.be/Ht4MUoQsRnI" \
  --embed-thumbnail \
  --merge-output-format mp4 \
  https://www.youtube.com/watch?v=Ht4MUoQsRnI \
  -o "Ht4MUoQsRnI.%(ext)s"
