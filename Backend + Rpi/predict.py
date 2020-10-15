import face_recognition as fr
from PIL import Image,ImageDraw

class Predict:
    def __init__(self, n, enc):
        self.names = n
        self.encodings = enc
    def get_name(self,img,fl):
        fen=fr.face_encodings(img,fl)
        names=[]
        for (t,r,b,l),face_en in zip(fl,fen):
            matches=fr.compare_faces(self.encodings,face_en)
            name="unknown"
            if True in matches:
                fmi=matches.index(True)
                name=self.names[fmi]
            names.append(name)
          
        return names 

