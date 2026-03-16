import math
u = int(input())
for _ in range(u):
    line = input().split()
    x = int(line[0])
    n = int(line[1])
    pos = math.ceil(n/2)
    negat = n - pos
    print((x * pos)-(x*negat))

    #insight s - sum(n)then greediky add it in some combination to check if its possible or not so basically brute force it 
    #removing which prefix gives me the answer and what happens if that prefix exists or does not exist in the hashmap
    # well if it exists then add += 1 if it doesnt then just add that prefix? not sure wull seee tomorrow
    #Problem 2193A codeforces dbmb and the array
    # this does look nice to be fair 