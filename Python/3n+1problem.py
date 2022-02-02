#if number is even, half it, if odd, multiply it by 3 and add 1 to the solution.
#you should get result 1 for every positive integer

y = input('enter a number: ')
n = int(y)
print('number is:', n)
while n!= 1:
    if (n%2==0):
        n = n/2
        print(n)
    else:
        n = 3*n+1
        print(n)