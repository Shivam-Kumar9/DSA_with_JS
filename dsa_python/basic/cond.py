# list comprehension
ar = [1,2,3,4,5]

a = []
ln = len(ar)-1
for i in ar:
    a.append(i**2)
square = [num**2 for num in ar] # list comprehend
print(square)
print( a)



# index , value for each element in the list 
fr = [ 'apple', 'banana', 'cherry']
 
for index, fruit in enumerate(fr):
    print(index, fruit)
print()
print()



