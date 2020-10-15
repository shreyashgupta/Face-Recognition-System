import face_recognition as fr
from predict import Predict
from picamera.array import PiRGBArray
from picamera import PiCamera
import time
import cv2
from firebase import firebase
from send import Send
firebase=firebase.FirebaseApplication('https://facerec-437f1.firebaseio.com/',None)
from getInfo import get_info
names,images=get_info()
encodings=[]
for i in range(0,len(names)):
    encodings.append(fr.face_encodings(images[i])[0])
    print(names[i]+"done")


model=Predict(names,encodings)
send_name=Send()
print("starting model")
cap=cv2.VideoCapture(0)
i=0;
temp=""
while cap.isOpened():
    ret,frame=cap.read()
    cv2.imshow("test",frame)
    if(i%5==0):
        
        face_locations=fr.face_locations(frame)
        n=[]
        if(len(face_locations)):
            n = model.get_name(frame,face_locations)
            if(temp!=n[0]):
                print(n[0])
                print(send_name.send_data(n[0]))
                temp=n[0]
        
    i=i+1
    if(cv2.waitKey(1)==ord('q')):
        break

cap.release()
cv2.destroyAllWindows

