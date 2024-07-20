// dummy data for now, replace with your own data
const posts = [
  {
    title: "Mein erstes Projekt: 6 DOF Roboterarm",
    content: "",
    image: "MyProject.jpg"
  },
  {
    title: "Ein kleines Video dazu:",
    content: "",
    video:  "IMG_4283.mp4"
  },
  {
    title: "Hier der Quellcode:",
    content: "",
    image: "image1.jpg",
    code: `
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver srituhobby = Adafruit_PWMServoDriver();

#define servoMIN 150
#define servoMAX 600
int pos1;
int pos2;
int pos3;
int pos4;
const int SW_pin = 2;
const int Y_pin3 = A0;
const int Y_pin2 = A3;
const int Y_pin = A1;
const int Y_pin4 = A2;
const int LED_GELB = 10;
const int LED_ROT = 11;
const int LED_Gruen = 12;
const int SW_pin2 = 4;
const int SW_pin3 = 5;
const int SW_pin4 = 4;
const int buttonPin = 10;
int buttonState = 0;

const int buttonPin2 = 9;
int buttonState2 = 0;

void setup() {
  Serial.begin(9600);
  srituhobby.begin();
  srituhobby.setPWMFreq(60);

  srituhobby.setPWM(0, 0, 300); // Setzen Sie den Servo auf die MAX-Position

  srituhobby.setPWM(1, 0, 250); // Setzen Sie den Servo auf die MAX-Position

  srituhobby.setPWM(2, 0, 100); // Setzen Sie den Servo auf die MAX-Position

  srituhobby.setPWM(3, 0, 400); // Setzen Sie den Servo auf die MAX-Position

  srituhobby.setPWM(4, 0, 340); // Setzen Sie den Servo auf die MAX-Position

  srituhobby.setPWM(5, 0, 300); // Setzen Sie den Servo auf die MAX-Position

  pinMode(LED_ROT, OUTPUT);

  pinMode(LED_Gruen, OUTPUT);

  pinMode(LED_GELB, OUTPUT);

  pinMode(buttonPin, INPUT);
}

void loop() {
  digitalRead(buttonPin);

  digitalWrite(LED_ROT, LOW);

  digitalWrite(LED_Gruen, LOW);

  digitalWrite(LED_GELB, LOW);

  digitalWrite(SW_pin, HIGH);

  digitalWrite(SW_pin2, HIGH);

  digitalWrite(SW_pin3, HIGH);

  digitalWrite(SW_pin4, HIGH);

  while (analogRead(Y_pin) >= 800) {
    pos1 = pos1 + 5;
    srituhobby.setPWM(0, 0, pos1);
    digitalWrite(LED_ROT, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin) <= 10) {
    pos1 = pos1 - 5;
    srituhobby.setPWM(0, 0, pos1);
    digitalWrite(LED_ROT, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin2) >= 800) {
    pos2 = pos2 + 5;
    srituhobby.setPWM(5, 0, pos2);
    digitalWrite(LED_Gruen, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin2) <= 10) {
    pos2 = pos2 - 5;
    srituhobby.setPWM(5, 0, pos2);
    digitalWrite(LED_Gruen, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin3) >= 800) {
    pos3 = pos3 + 5;
    srituhobby.setPWM(3, 0, pos3);
    digitalWrite(LED_GELB, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin3) <= 10) {
    pos3 = pos3 - 5;
    srituhobby.setPWM(3, 0, pos3);
    digitalWrite(LED_GELB, HIGH);
    delay(15);
  }

  while (analogRead(Y_pin4) >= 800) {
    pos4 = pos4 + 5;
    srituhobby.setPWM(1, 0, pos3);
    delay(15);
  }

  while (analogRead(Y_pin4) <= 10) {
    pos4 = pos4 - 5;
    srituhobby.setPWM(1, 0, pos3);
    delay(15);
  }

  buttonState = digitalRead
  buttonState = digitalRead(buttonPin);
}
  },
  // add more posts here
];

// render posts
const postList = document.querySelector(".post-list");
posts.forEach((post) => {
  const postHTML = `
    <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <img src="${post.image}" alt="${post.title}" class="post-image">
      <p class="post-content">${post.content}</p>
      ${post.video ? `
        <video width="100%" controls>
          <source src="${post.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      ` : ''}
    </div>
  `;
  postList.innerHTML += postHTML;
});
