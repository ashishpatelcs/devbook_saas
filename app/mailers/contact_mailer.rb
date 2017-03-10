class ContactMailer < ActionMailer::Base
    default to: 'ashish.tripleclicks@gmail.com'
    
    def contact_email(name, email, body)
        @name = name
        @email = email
        @body = body
        
        mail(from: email, message: 'contact form message!')
    end
end