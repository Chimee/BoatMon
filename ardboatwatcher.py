import serial, csv, numpy

arduinoSerialData = serial.Serial('/dev/ttyACM1',9600)



while 1:
    P1F = []
    P1D = []
    P2F = []
    P2D = []
    P3F = []
    P3D = []
    P4F = []
    P4D = []
    B1C = []
    B1R = []
    swstates = P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R
    if(arduinoSerialData.inWaiting()>0):
        states = str(arduinoSerialData.readline())
        pump1fill, pump1drain, pump2fill, pump2drain, pump3fill, pump3drain, pump4fill, pump4drain, bilge1center, bilge1rear = states.split(',')
        print ("Pump 1 Fill State: ", pump1fill[2], "Pump 1 Drain State: ", pump1drain, "Pump 2 Fill State: ", pump2fill, "Pump 2 Drain State: ", pump2drain, "Pump 3 Fill State: ", pump3fill, "Pump 3 Drain State: ", pump3drain, "Pump 4 Fill State: ", pump4fill,"Pump 4 Drain State: ", pump4drain, "Bilge 1 Center State: ", bilge1center, "Bilge 1 Rear State: ", bilge1rear)        
        
        
        P1F += (pump1fill[2])
        P1D += (pump1drain)
        P2F += (pump2fill)
        P2D += (pump2drain)
        P3F += (pump3fill)
        P3D += (pump3drain)
        P4F += (pump4fill)
        P4D += (pump4drain)
        B1C += (bilge1center)
        B1R += (bilge1rear)

        print ("States", P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R)
            

        with open ('/home/pi/boatmon/public/switchstates.csv', "w+", newline="") as f:
            writer = csv.writer(f)
            for P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R in zip(swstates[0], swstates[1], swstates[2], swstates[3], swstates[4], swstates[5], swstates[6], swstates[7], swstates[8], swstates[9]):
                writer.writerow([P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R])
                f.flush()
            print (P1F, P1D, P2F, P2D, P3F, P3D, P4F, P4D, B1C, B1R)
            f.flush()
            
                                                                                    
                                                                                    
            
