from sense_hat import SenseHat
import random
import time
sense = SenseHat()


while True:
    for y in range (0, 8):
        for x in range (0, 8):
            sense.clear()
            sense.set_pixel(x, y, random.randint(0,255), random.randint(0,255),random.randint(0,255))
            time.sleep(random.random())
    
