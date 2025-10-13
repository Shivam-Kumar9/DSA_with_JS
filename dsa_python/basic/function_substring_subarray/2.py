# how to create a function 
# in python function would start with def keyword "def"

# def fuction_name(parameters):

''' this is comment section for documentation purpose it does not beak multi line '''
def greet(name):
    print("helloe"+" ",name)
    
greet("shivam")    

def prime(n):
    for i in range(2,n):
        if n%i==0 :
            return print('not')
    print('prime',n)    
prime(3)
prime(13)


  
    