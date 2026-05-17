using namespace std;

long long solution(int price, int money, int count)
{
    long long answer = -1;
    long long totalCost = 0;
    for (int i = 1; i <= count; i++){
        totalCost += (price * i);
    }
    return totalCost - money > 0 ? totalCost - money : 0 ;
}