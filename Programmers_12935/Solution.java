package Programmers_12935;
import java.util.*;

public class Solution {
	public int[] solution(int[] arr) {
		int[] answer = new int[arr.length-1];
		
		Arrays.sort(arr); //�迭 �������� ����
		if(answer.length == 0) {
			return new int[] {-1};
		}
		
		for (int i=1 ; i<arr.length ;i++) {		
			answer[answer.length-i] = arr[i];
		}
				
		return answer; 
	}

}
