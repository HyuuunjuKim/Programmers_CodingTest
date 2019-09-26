package Programmers_12903;

import java.util.ArrayList;
import java.util.*;

public class Solution {
	public String solution(String s) {
			
		
		//단어 길이 짝수일 때
		if(s.length() % 2 == 0) {
			s = s.substring(s.length()/2-1, s.length()/2 + 1);
		}
		//단어 길이 홀수일 때
		else {
			s = s.substring(s.length()/2, s.length()/2 + 1);
		}
		
		return s;
	}

}
