N = int(input())


def recursion(s, l, r, depth):
    if l >= r:
        return [1, depth]
    elif s[l] != s[r]:
        return [0, depth]
    else:
        return recursion(s, l + 1, r - 1, depth + 1)


def isPalindrome(s):
    return recursion(s, 0, len(s) - 1, 1)


for i in range(N):
    s = list(input())
    result, count = isPalindrome(s)
    print(result, count)
