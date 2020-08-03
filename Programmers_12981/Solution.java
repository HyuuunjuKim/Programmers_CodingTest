package Programmers_12982;

import java.util.Arrays;

public class Solution {
	public int solution(int[] d, int budget) {
		int answer = 0;
		int sum=0;
		
		Arrays.sort(d);
		for(int i = 0; i < d.length ; i++) {
			sum +=d[i];
			if(sum >budget) {
				answer = i;
				break;
			}
			if(i == d.length -1) {
				answer = d.length;
			} 
		}
		return answer;
	}
	
	
	public static void main(String[] args) {
		Solution sl = new Solution();
		int[] d = {2,2,3,3};
		int budget = 10;
		System.out.println(sl.solution(d, budget));
	}

}
