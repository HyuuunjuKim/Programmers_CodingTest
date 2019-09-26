package Programmers_12901;

public class Solution {
	public String solution(int a, int b) {
		String answer = "";
		//�� ���� �ϼ��� ���� �迭 ����
		int[] month = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		int aSum = 0; 
		for(int i = 0 ; i < a-1 ; i++) {
			aSum = aSum + month[i];			
		}
		//�� ������ ������
		int totalDays = aSum + b-1;
		
		//������ ���� �迭 ����
		String[] days = {"FRI","SAT", "SUN", "MON", "TUE", "WED", "THU"};
		answer = days[totalDays%7];
		
		return answer;
	}

}
