package Programmers_12910;
import java.util.*;

public class Solution {
	 public int[] solution(int[] arr, int divisor) {
		 int[] answer = {};
		 int count = 0;
		 
		 boolean[] arr_index = new boolean[arr.length];
		 for(int i = 0 ; i< arr.length ; i++) {
			 if(arr[i] % divisor == 0) {
				 arr_index[i] = true; //������ �������� ���� �ش��ϴ� �ε����� true ����
				 count++;
			 }
		 }
		 
		 if(count == 0) {
			 answer= new int[1];
			 answer[0] = -1;
		 }
		 else {
			 answer = new int[count];
		 
//		 if(count == 0) {
//			 
//		 }
	     
		     int a = 0;
		     for(int i = 0 ; i < arr.length ; i++) {	
		    	 if(arr_index[i]== true) {
		    		 answer[a] = arr[i];
		    		 a++;
		    	 }
		     }
		 }
	     
	     Arrays.sort(answer);
	     return answer;
	 }
}
