package Programmers_12939;

public class Solution {
	public String solution(String s) {
		/*
		 * 문자열 속 공백 제거 replace()
		 * 숫자 하나씩 int배열에 담기
		 */
		
		s=s.replace(" ", ","); //공백 제거함
		String[] array_s = {};
		array_s = s.split(","); //array로 만듦
		
		int[] int_s = new int[array_s.length];
		for(int i = 0 ; i < array_s.length ; i++) {
			int_s[i] = Integer.parseInt(array_s[i]);
		}
		
		//최솟값 찾기
		int min = int_s[0];
		for(int i = 1 ; i < int_s.length ; i++ ) {
			if(min > int_s[i]) {
				min = int_s[i];
			}
		}
		
		//최댓값 찾기
		int max = int_s[0];
		for(int i = 1 ; i < int_s.length ; i++ ) {
			if(max < int_s[i]) {
				max = int_s[i];
			}
		}
		
		String answer = Integer.toString(min)+" "+Integer.toString(max);
		return answer;
	}

}
