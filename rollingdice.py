from sense_hat import SenseHat
import random
sense = SenseHat()

i = 0
points_vriend = 0
points = 0

while i < 22:
    accel = sense.get_accelerometer_raw();
    x = accel['x']
    #print(x)
    
    if x > 0.1:
        randnumb = random.randint(0,6)
        if i % 2 == 0:
            points_vriend += randnumb
            print('Vriend heeft {} gegooid, puntentotaal staat nu op {}'.format(randnumb, points_vriend))
        else:
            points += randnumb
            print('U heeft {} gegooid, puntentotaal staat nu op {}'.format(randnumb, points))
            
        i += 1
    #print(i)
if points_vriend > points:
    print('U vriend heeft gewonnen')
    sense.show_message('Loser')
elif points == points_vriend:
    print('Draw, dju.')
    sense.show_message('Draw')
else:
    print('Proficiat, u heeft gewonnen')
    sense.show_message('Winner winner chicken dinner')
      
              
