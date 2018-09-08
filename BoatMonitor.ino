

int pump1fill = 22;
int pump2fill = 24;
int pump3fill = 26;
int pump4fill = 28;

int pump1drain = 23;
int pump2drain = 25;
int pump3drain = 27;
int pump4drain = 29;

int bilge1center = 30;
int bilge1rear = 31;


// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);

  pinMode(pump1fill, INPUT);
  pinMode(pump2fill, INPUT);
  pinMode(pump3fill, INPUT);
  pinMode(pump4fill, INPUT);
  pinMode(pump1drain, INPUT);
  pinMode(pump2drain, INPUT);
  pinMode(pump3drain, INPUT);
  pinMode(pump4drain, INPUT);
  pinMode(bilge1center, INPUT);
  pinMode(bilge1rear, INPUT);
   
}

void loop() {
  // read the input pin:
  int pump1fillState = digitalRead(pump1fill);
  int pump2fillState = digitalRead(pump2fill);
  int pump3fillState = digitalRead(pump3fill);
  int pump4fillState = digitalRead(pump4fill);

  
  int pump1drainState = digitalRead(pump1drain);
  int pump2drainState = digitalRead(pump2drain);
  int pump3drainState = digitalRead(pump3drain);
  int pump4drainState = digitalRead(pump4drain);    

  int bilge1centerState = digitalRead(bilge1center);
  int bilge1rearState = digitalRead(bilge1rear);

  
  // print out the state of the button:
  //Serial.print("Pump 1 Fill");
  Serial.print(pump1fillState);
  Serial.print(",");
 // Serial.print("Pump 1 Drain");
  Serial.print(pump1drainState);
  Serial.print(",");
  //Serial.print("Pump 2 Fill");
  Serial.print(pump2fillState);
  Serial.print(",");
  //Serial.print("Pump 2 Drain");
  Serial.print(pump2drainState);
  Serial.print(",");
 // Serial.print("Pump 3 Fill");
  Serial.print(pump3fillState);
  Serial.print(",");
  //Serial.print("Pump 3 Drain");
  Serial.print(pump3drainState);
  Serial.print(",");
 // Serial.print("Pump 4 Fill");
  Serial.print(pump4fillState);
  Serial.print(",");
 // Serial.print("Pump 4 Drain");
  Serial.print(pump4drainState);
  Serial.print(",");



//  Serial.print("Bilge 1 Center");
  Serial.print(bilge1centerState);
  Serial.print(",");
//  Serial.print("Bilge 1 Rear");
  Serial.print(bilge1rearState);
  Serial.print("\n");

  
  delay(5000);        // delay in between reads for stability
}



