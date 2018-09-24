from sense_hat import SenseHat
import time
import random
import sys
sense = SenseHat()

message = 'NMD'
speed = random.randint(0,10)

# Check if arguments have been supplied
if len(sys.argv) > 2:
    message = str(sys.argv[1])
    speed = int(sys.argv[2])
    
# Keep looping over the letters in a string    
while True:
    for c in message:
        sense.show_letter(c, text_colour=[random.randint(0,255),random.randint(0,255),random.randint(0,255)])
        time.sleep(1)
    time.sleep(speed)
