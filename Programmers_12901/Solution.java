package Programmers_12901;

public class Solution {
	public String solution(int a, int b) {
		String answer = "";
		//각 달의 일수를 담은 배열 생성
		int[] month = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		int aSum = 0; 
		for(int i = 0 ; i < a-1 ; i++) {
			aSum = aSum + month[i];			
		}
		//총 지나간 나날들
		int totalDays = aSum + b-1;
		
		//요일을 담은 배열 생성
		String[] days = {"FRI","SAT", "SUN", "MON", "TUE", "WED", "THU"};
		answer = days[totalDays%7];
		
		return answer;
	}

}
