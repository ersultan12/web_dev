n = int(input())
cnt = 0
i = 2
while i <= n:
    if n % i == 0:
        cnt += 1
    i += 1
print(cnt)