def min(a, b, c, d):
    if a <= b and a <= c and a <= d:
        return a
    if b <= a and b <= c and b <= d:
        return b
    if c <= b and c <= a and c <= d:
        return c
    if d <= b and d <= c and d <= a:
        return d
    
a, b, c, d =  list(map(int, input().split()))

print(min(a, b, c, d))