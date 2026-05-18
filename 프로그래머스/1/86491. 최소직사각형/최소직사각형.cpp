#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> sizes) {
    int width = 0;
    int height = 0;
    for (int i = 0; i < sizes.size(); i++){
        int currWidth = sizes[i][0] > sizes[i][1] ? sizes[i][0] : sizes[i][1];
        int currHeight = sizes[i][0] > sizes[i][1] ? sizes[i][1] : sizes[i][0];
        if (width < currWidth) width = currWidth;
        if (height < currHeight) height = currHeight;
    }
    return width * height;
}