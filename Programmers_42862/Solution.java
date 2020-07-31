package Programmers_42862;
import java.util.*;

public class Solution {

	public static int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        
        int[] status = new int[n+2];
        for(int i = 0 ; i <lost.length ; i++) {
        	status[lost[i]] = -1;
        }
        for (int j=0 ; j < reserve.length; j++ ) {
        	status[reserve[j]] += 1;
        }
        
        for(int k=1 ; k < status.length-1 ; k++) {
        	if(status[k] == -1 && ( status[k-1] == +1 || status[k+1] == +1) ) {
        		if(status[k-1] == +1 && status[k+1] == +1) {
        			status[k-1] = 0;
        			status[k] = 0;
        		} else if(status[k-1] == +1) {
        			status[k-1] = 0;
        			status[k] = 0;
        		} else {
        			status[k+1] = 0;
        			status[k] = 0;
        		}
        	} 
        } 
        
        int count = 0;
        for(int m = 1; m < status.length-1 ; m++) {
        	if(status[m] >= 0) {
        		count++;
        	}
        }
        answer = count;
        return answer;
        
        
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 3;
		int[] lost = {3};
		int[] reserve = {1};
		System.out.println(solution(n, lost, reserve));

	}
};


