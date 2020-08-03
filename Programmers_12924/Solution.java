package Programmers_12924;

public class Solution {
	public int solution(int n) {
		int answer = 0;
		for(int i = 1; i <= n/2 ; i++) {
			int sum = 0;
			for(int j = i ; j <n ;j++) {
				sum +=j;
				if(sum == n) {
					answer++;
					break;
				}
				if(sum > n) {
					break;
				}
			}
		}
		answer++;
		return answer;
	}
	public static void main(String[] args) {
		Solution sl = new Solution();
		int  n = 15;
		System.out.println(sl.solution(n));
	}

}
