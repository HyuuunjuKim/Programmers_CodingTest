package Programmers_12948;
import java.util.*;

public class Solution {
	public String solution(String phone_number) {
		String answer = "";
		/*
		 * �� ��ȣ �����ϰ� ���� *�� �ٲٱ� 
		 */
		
		char[] number_array = phone_number.toCharArray(); //����ȣ�� char�迭�� ��ȯ
		for(int i = 0 ; i < phone_number.length()-4; i++) {
			number_array[i] = '*'; //�ڿ� ��ȣ ���ڸ� �����ϰ� *�� ��ȯ
		}
		answer = new String(number_array); //char�迭�� string���� ��ȯ
		return answer;
	}

}
