x = int(input())
y = int(input())
z = int(input())
w = int(input())

y += 1

for i in range(x, y):
    if i % w == z:
        print(i, end=' ')