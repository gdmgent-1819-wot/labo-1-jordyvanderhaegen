import threading
from sense_hat import SenseHat
import random
import time
sense = SenseHat()

sense.clear()

def draw_pixel(x,y):
    sense.set_pixel(x, y, random.randint(0,255), random.randint(0,255),random.randint(0,255))
    #time.sleep(0.2)    
    time.sleep(random.random())
    sense.set_pixel(x,y, 0, 0, 0)
    time.sleep(random.random())
    draw_pixel(x,y)

threads = []

def assign_thread(x,y):
    t = threading.Thread(target=draw_pixel, args=(x,y))
    threads.append(t)
    t.start()
    
#Assign a thread to each pixel
for y in range (0, 8):
        for x in range (0, 8):
            assign_thread(x,y)
    

