#include <vector>
using namespace std;
#include <unordered_map>

int solution(vector<int> nums)
{
    unordered_map<int,int> mp;
    // N / 2개 or N 개 nums길이보다 N / 2가 크면 nums길이개 작으면 N / 2개
    for (int num : nums){
        mp[num]++;
    }
    return min(mp.size(),nums.size() / 2);
}