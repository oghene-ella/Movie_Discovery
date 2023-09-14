// Created custom modules needed for the utc, vote and vote count
export const getVote = (vote) => {
	if (vote) {
		const newVote = vote.toFixed(1)
		return newVote;
	}
};

export const getVoteCount = (voteCount) => {
	if (voteCount) {
		const voteCountVal = voteCount / 1000
		return voteCountVal.toFixed(1);
	}
};

export const getUtcDate = (date) => {
	if (date) {
		const newDate = new Date(date);
		const utcDate = newDate.toISOString();
		return utcDate;
	}
};

// module.export = getUtcDate
