# start node server
node app.js &
node servo.js &

# start video streaming server

#/usr/local/bin/mjpg_streamer -i "input_raspicam.so -vf -hf true  1280x720 /dev/video0 -fps 30 -q 80" -o "output_http.so -p 8080  -w /usr/local/share/mjpg-streamer/www"
