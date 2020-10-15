import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from PIL import Image
import numpy as np
import cv2
# Use a service account
import requests
from io import BytesIO
def get_info():
    
    cred = credentials.Certificate('./cred.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client()
    user_ref=db.collection('Users')
    docs=user_ref.stream()
    images=[]
    names=[]
    for doc in docs:
        user=doc.to_dict()
        response = requests.get(user['image'])
        img = Image.open(BytesIO(response.content))
        img=np.array(img)
        images.append(img)
        names.append(user['name'])
    return names,images