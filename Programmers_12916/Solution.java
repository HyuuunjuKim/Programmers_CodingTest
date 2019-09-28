package Programmers_12916;

import java.util.*;
public class Solution {
	boolean solution(String s) {
		boolean answer;
		
		int sum_p = 0;
		int sum_y = 0;
		for(int i = 0; i< s.length() ; i++) {
			if(s.charAt(i) == 'p' || s.charAt(i) == 'P') {
				sum_p++;
			}
			else if(s.charAt(i) == 'y' || s.charAt(i) == 'Y') {
				sum_y++;
			}
		}
		
		if (sum_p == sum_y || (sum_p == 0 && sum_y ==0) ) {
			answer = true;
		}
		else {
			answer = false;
		}
		
		return answer;
	}
	
}
