package Programmers_12934;
import java.util.*;

public class Solution {
	public long solution(long n) {
	      long answer = 0;
	      /*
	       * ������ �Ǵ� ���
	       * �������� �ø����� �������� ���� �� Ȯ��
	       */
	      if((Math.floor(Math.sqrt(n))) == Math.ceil(Math.sqrt(n))) {
	    	  answer = ((long)Math.sqrt(n)+1)*((long)Math.sqrt(n)+1); 
	    	  
	      }
	      else {
	    	  answer = -1;
	      }
	      return answer;
	  }

}
