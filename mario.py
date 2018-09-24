from sense_hat import SenseHat
import time
sense = SenseHat()
# Clear the canvas
sense.clear()

# Define the preset colours
r = [255, 0, 0]
blue = [0, 0, 255]
y = [0, 255, 255]
o = [168, 129, 84]
w = [255, 255, 255]
b = [0, 0, 0]

# Define the image array with the preset colours
img = [
b,b,b,r,r,r,w,b,
b,b,b,r,r,r,r,r,
b,b,o,o,o,b,o,b,
b,b,o,o,o,o,o,o,
b,b,b,o,o,o,o,b,
b,r,r,y,blue,blue,y,b,
w,b,blue,blue,blue,blue,b,w,
b,b,r,b,b,b,r,b
]

# Define a function that draws mario
def draw_mario(img):
    sense.set_pixels(img)

# Draw mario for the first time
draw_mario(img)
# Keep listening for stick action events
while True:
    event = sense.stick.wait_for_event()
    
    # Define a new array without the first 8 pixels
    img_new = img[8:64]
    
    # Add 8 empty pixels to the array
    for x in range(0,8):
        img_new.append([0,0,0])
    
    # Draw the new mario 
    draw_mario(img_new)
    
    # Delay 1 second
    time.sleep(1)
    
    #Draw the old mario
    draw_mario(img)


