package Programmers_42576;
import java.util.*;

public class Solution {
	public String solution(String[] participant, String[] completion) {
        /*
        * �� �� sort �� ������
        * �ϳ��� ���ؼ� �ٸ��� �Ǹ� participant���� �������� �ɵ�?
        */
        String answer = "";
        Arrays.sort(participant);
        Arrays.sort(completion);
        
        
        int index = 0;
        
        // String[] copy_com = new String[completion.length +1];
        // for (int i = 0 ; i < completion.length ; i++) {
        //     copy_com[i] = completion[i];            
        // }
        // copy_com[completion.length] = "0";
        
        for(int i = 0 ; i < participant.length-1 ; i++) {
            if(participant[i].equals(completion[i])) {               
                continue;
            }
            else {
            	index = i;
                break;
            }
            
        }
        
        if(index == 0) {
            answer = participant[participant.length-1];
        }
        else {	
        	answer= participant[index];
        }
        
        return answer;
    }
}
