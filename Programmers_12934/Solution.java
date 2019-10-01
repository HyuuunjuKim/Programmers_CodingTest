package Programmers_12934;
import java.util.*;

public class Solution {
	public long solution(long n) {
	      long answer = 0;
	      /*
	       * 제곱근 판단 방법
	       * 제곱근의 올림수와 내림수가 같은 지 확인
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
