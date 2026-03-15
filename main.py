import math
u = int(input())
for _ in range(u):
    line = input().split()
    x = int(line[0])
    n = int(line[1])
    pos = math.ceil(n/2)
    negat = n - pos
    print((x * pos)-(x*negat))