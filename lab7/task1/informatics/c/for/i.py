import math
x = int(input())
cnt = 0
for i in range(1, x):
    if i*i > x: break

    if x % i == 0:
        cnt += 2
    if i*i == x:
        cnt -= 1
        break
if(x == 1): cnt += 1
print(cnt)