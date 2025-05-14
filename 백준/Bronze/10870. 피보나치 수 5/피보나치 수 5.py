N = int(input())


def fibonaci(number):
    if number == 1:
        return 1
    if number == 0:
        return 0
    return fibonaci(number - 1) + fibonaci(number - 2)


print(fibonaci(N))
