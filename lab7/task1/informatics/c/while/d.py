n = int(input())
x = 1
i = 1
while i <= n:
    if(2**i == n):
        print('YES')
        x = 2
    i+=1
if x == 1:
    print('NO')