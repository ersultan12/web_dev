n = int(input())

i = 1
print(1, end=' ')
while i <= n:
    if(2**i <= n):
        print(2**i, end=' ')
    i+=1