package Programmers_12915;
import java.util.*;

public class Solution {
	public String[] solution(String[] strings, int n) {
		/*
		 * �迭�� n��° char�� 
		 * ���ؼ� �������� ����
		 * �������� �����ϰ�, strings�迭�̶� ���ؼ� answer�� �ֱ�
		 * 
		 */
		String one = "1";
		for(int i = 0 ; i < n ; i++) {
			one = one.concat("1");
		}
		Arrays.sort(strings);
		String[] copy_strings = new String[strings.length];
		for(int i = 0 ; i < strings.length ; i++) {
			copy_strings[i] = strings[i]; 
		}
		String[] answer = new String[strings.length];
		
		char[] ch = new char[strings.length];
		for(int i = 0 ; i < strings.length ; i++) {
			ch[i] = strings[i].charAt(n);
		}
		
		Arrays.sort(ch);
		for( int i = 0 ; i < strings.length ; i++) {
			for(int j = 0 ; j < strings.length ; j++) {
				if(ch[i]== copy_strings[j].charAt(n)) {
					answer[i] = copy_strings[j];
					copy_strings[j] = one;
					break;
				}
				
			}
			
		}
		return answer;
	}

}
