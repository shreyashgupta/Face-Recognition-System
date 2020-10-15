from twilio.rest import Client

def send_whatsapp_message():
    account_sid = 'AC60b83e128b9a2def807f7ce6dd923f19'
    auth_token = '5f9295fd0007a8a1a12dc21b4d584746'
    client = Client(account_sid, auth_token)

    message = client.messages.create(
                     body="ALERT!! Someone unknown entered your house",
                     from_='whatsapp:+14155238886',
                     to='whatsapp:+919140701395'
                 )
    
send_whatsapp_message()