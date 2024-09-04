function solution(bridge_length, weight, truck_weights) {
	const bridge = [[0, 0]]; // 다리 [트럭 무게, 다리 건너는 완료 시간]
	let totalWeight = 0; // 다리 위 트럭의 총 무게
	let time = 0; // 시간
	// 대기 트럭과 다리 위 트럭이 다 지나갈 때까지 반복
	while (truck_weights.length || bridge.length) {
		// 다리 위 가장 앞에 있는 트럭이 지나갈 시간이 되었다면
		if (bridge[0][1] === time) {
			totalWeight -= bridge.shift()[0]; // 다리와 다리 위 트럭의 총 무게에서 제거
		}

		// 다리 위 트럭의 총 무게 + 첫번째 대기 트럭의 무게 <= 다리 무게 제한
		if (totalWeight + truck_weights[0] <= weight) {
			const truckWeight = truck_weights.shift(); // 첫번째 대기 트럭을
			bridge.push([truckWeight, time + bridge_length]); // 다리 위로 보냄
			totalWeight += truckWeight; // 다리 위 트럭의 총 무게 += 첫번째 대기 트럭 무게
		} else {
			// 다리 무게 제한에 걸렸거나 대기 트럭이 없는 경우
			if (bridge[0]) {
				// 그 중 다리 무게 제한인 경우,
				// 다리 위 첫번째 트럭이 빨리 지나가도록 시간을 첫번째 트럭 완료 시간으로 점프
				time = bridge[0][1] - 1;
			}
		}

		time++;
	}

	return time;
}
