import sys
input = sys.stdin.readline

n,m = list(map(int,input().split()))
tree_list = list(map(int,input().split()))


def find_tree(tree_list):
    left = 1
    right = max(tree_list)
    while left <= right:
        mid = (left + right) // 2
        total_tree = 0
        for tree in tree_list:
            sub = tree - mid
            if sub > 0:
                total_tree += (tree - mid)
        if total_tree >= m:
            left = mid  + 1
        else:
            right = mid  - 1
        
    return right


print(find_tree(tree_list))
