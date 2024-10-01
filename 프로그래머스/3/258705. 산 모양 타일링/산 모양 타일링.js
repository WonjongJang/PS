function solution(n, tops) {
	const dp = Array.from({ length: n + 1 }).fill(0);

	dp[0] = 1;
	dp[1] = tops[0] === 1 ? 4 : 3;
	for (let i = 2; i < tops.length+1; i++) {
		if (tops[i - 1] === 1) {
			dp[i] = (4 * dp[i - 1] - dp[i - 2]) % 10007;
		} else {
			dp[i] = (3 * dp[i - 1] - dp[i - 2]) % 10007;
		}

		if (dp[i] < 0) dp[i] += 10007;
	}
    
	return dp[n];
}
