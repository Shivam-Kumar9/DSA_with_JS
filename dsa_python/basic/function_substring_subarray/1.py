#     1
#    21
#   321
#  4321
# 54321

N= 5
for i in range(N):
     
    for j in range(N-i-1):
         print(" ", end = '')

    for j in range(i+1, 0, -1):
           print(j, end = '')
    print()