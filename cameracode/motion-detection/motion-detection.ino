#define pirPin 2
int calibrationTime = 30;
unsigned motionLowIn;
unsigned motionPause = 5000;
boolean motionLockLow = true;
boolean motionTakeLowTime;
int motionPIRValue = 0;
int print_delay = 30000000;
int i = 0;

void setup() {
   Serial.begin(9600);
   pinMode(pirPin, INPUT);
   Serial.println("Calibrating...");
   delay(calibrationTime * 1000);
   Serial.println("Done calibrating.");
}

void loop() {
   PIRSensor();
}

boolean detectMotion() {
   if(digitalRead(pirPin) == HIGH) {
      if(motionLockLow) {
         motionPIRValue = 1;
         motionLockLow = false;
         delay(50);
         return true;
      }
      motionTakeLowTime = true;
   }
   if(digitalRead(pirPin) == LOW) {
      if(motionTakeLowTime){
         motionLowIn = millis();motionTakeLowTime = false;
      }
      if(!motionLockLow && millis() - motionLowIn > motionPause) {
         motionPIRValue = 0;
         motionLockLow = true;
         delay(50);
      }
   }
   return false;
}

void PIRSensor() {
  if(detectMotion()){
    Serial.println("Taking a picture!");
  }
}
