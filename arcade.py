from sense_hat import SenseHat
import random
import time
import sys
sense = SenseHat()

size = 8
speed = 1
color = (255,0,0)

# Check if arguments have been supplied
if len(sys.argv) > 5:
    size = int(sys.argv[1])
    speed = int(sys.argv[2])
    color = (int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]))

# Define the drawing function
def drawArcadeCharacter():
    sense.clear()
    # Divide the canvas in 2 parts
    for x in range(size//2):
        for y in range(size):
            # Draw the pixels on the first part of the canvas and mirror them on the second panel
            if random.randint(0,1):
                sense.set_pixel(x,y,color)
                sense.set_pixel(((size-1)-x),y,color)
    time.sleep(speed)

# Keep looping over the draw function
while True:
    drawArcadeCharacter()
    
    
    