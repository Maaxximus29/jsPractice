print("hell0")

    #insight s - sum(n)then greediky add it in some combination to check if its possible or not so basically brute force it 
    #removing which prefix gives me the answer and what happens if that prefix exists or does not exist in the hashmap
    # well if it exists then add += 1 if it doesnt then just add that prefix? not sure wull seee tomorrow
    #Problem 2193A codeforces dbmb and the array
    # this does look nice to be fair 
    uInput = int(input())
for _ in range(uInput):
    n = int(input())
    a = [int(x) for x in input().split()]
    newArr = [0] * (len(a) + 2)
    l = 0
    while l < len(a):
        if l == 0:
            newArr[a[l]-1] = a[l]
            l += 1 
        elif newArr[a[l] - 2] != 0 or newArr[a[l]] != 0:
            newArr[a[l] - 1 ] = a[l]
            l += 1
        else:
            print("No")
            break
    else: 
        print("Yes")