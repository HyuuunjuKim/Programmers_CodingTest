package Programmers_12935;
import java.util.*;

public class Solution {
	public int[] solution(int[] arr) {
		int[] answer = {};
		
		int[] sort_arr = new int[arr.length];
		for(int i = 0 ; i < arr.length ; i++) {
			sort_arr[i] = arr[i]; 
		}
		
		Arrays.sort(sort_arr); //배열 오름차순 정렬
		int min = sort_arr[0]; //최솟값 얻음
		int answer_index = 0;
		if(arr.length == 1 ) {
			answer = new int[1];
			answer[0] = -1;
			
		}
		else {
			answer = new int[arr.length-1];
			for (int i = 0 ; i < arr.length ; i++ ) {
				if(min < arr[i]) {
					answer[answer_index] = arr[i]; 
					answer_index++;
				}
			}
		}
						
		return answer; 
	}

}
