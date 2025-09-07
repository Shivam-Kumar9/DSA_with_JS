# sub array 
arr = [1,2,3,4,5,6,7,8,9]

for i in range(0,len(arr)-1):
    for j in range(len(arr),i-1,-1):
        print(arr[i:j])
    print() 