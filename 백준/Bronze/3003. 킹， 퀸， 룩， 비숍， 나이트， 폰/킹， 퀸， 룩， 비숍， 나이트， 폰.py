curr_list = list(map(int,input().split()))
origin_list = [1,1,2,2,2,8]

result = [x-y for x,y in zip(origin_list,curr_list)]
print(" ".join(map(str,result)))