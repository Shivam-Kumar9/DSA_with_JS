# 2D array and Sum 

# Description 
'''
You are given an array matrix of n rows and m columns which
contains positive integers and sums.

You need to find occurences of the sum of  three conscutive numbers (i.e x,y and z) whose  sum of equal to s apperar horizontally, vertically and diagonally in the given matrix.
'''
# Sample Input 1
'''
3 3 6

3 2 1
2 2 2
1 5 1
'''
# Sample Output 1
'''
2
'''
#solve  the problem




# def count_occurrences(matrix, s):
#     n = len(matrix)
#     m = len(matrix[0]) if n > 0 else 0
#     count = 0

#     # Check horizontally
#     for i in range(n):
#         for j in range(m - 2):
#             if matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] == s:
#                 count += 1

#     # Check vertically
#     for i in range(n - 2):
#         for j in range(m):
#             if matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] == s:
#                 count += 1

#     # Check diagonally (top-left to bottom-right)
#     for i in range(n - 2):
#         for j in range(m - 2):
#             if matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2] == s:
#                 count += 1

#     # Check diagonally (top-right to bottom-left)
#     for i in range(n - 2):
#         for j in range(2, m):
#             if matrix[i][j] + matrix[i + 1][j - 1] + matrix[i + 2][j - 2] == s:
#                 count += 1

#     return count   
# # Example usage
# matrix = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]
# s = 15
# print(count_occurrences(matrix, s)) 