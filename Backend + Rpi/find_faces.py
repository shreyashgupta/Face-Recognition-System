import face_recognition as fr
import cv2
image= fr.load_image_file('./group')
face_locations=fr.face_locations(image)

for (x1,y1,x2,y2) in face_locations:
	image=cv2.rectangle(image,(y2,x1),(y1,x2),(255,0,0),3)
	
print(len(face_locations))
image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) 
cv2.imwrite('./res.jpeg',image)

