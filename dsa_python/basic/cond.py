# list comprehension
ar = [1,2,3,4,5]

a = []
ln = len(ar)-1
for i in ar:
    a.append(i**2)
square = [num**2 for num in ar]
print(square)
print( a)