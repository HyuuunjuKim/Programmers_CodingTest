package Programmers_12928;

public class Solution { 
	public int solution(int n){
		int answer = 0;
		/*
		 * n을 1부터 n까지 나누면서 나머지가 0이면
		 * 약수이므로 answer에 추가
		 */
		for(int i=1 ; i <= n ; i++) {
			if(n % i == 0) {
				answer = answer+i;
			}
		}
		return answer;
	}
	
}
