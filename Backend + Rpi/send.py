from firebase import firebase
from datetime import datetime
firebase=firebase.FirebaseApplication('https://facerec-437f1.firebaseio.com/',None)

class Send:
    
    def send_data(self,name):
        
        now = datetime.now()
        current_time = now.strftime("%H:%M:%S")
        data={
        'name':name,
        'time':current_time
        }
        res=firebase.post('facerec-437f1/visitor',data)
        return res
    

s=Send()

print(s.send_data("testrpi"))