package Programmers_12903;

import java.util.ArrayList;
import java.util.*;

public class Solution {
	public String solution(String s) {	
		
		//�ܾ� ���� ¦���� ��
		if(s.length() % 2 == 0) {
			s = s.substring(s.length()/2-1, s.length()/2 + 1);
		}
		//�ܾ� ���� Ȧ���� ��
		else {
			s = s.substring(s.length()/2, s.length()/2 + 1);
		}
		
		return s;
	}

}

/* solution2
 class Solution {
  public String solution(String s) {
      String answer = "";
      if(s.length() % 2 != 0) { //Ȧ����
          answer = String.valueOf(s.charAt((s.length()-1)/2));
      }
      else {
          answer = String.valueOf(s.charAt((s.length())/2-1)) + String.valueOf(s.charAt((s.length())/2));
      }
      return answer;
  }
}
 */
