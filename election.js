const candidates = ['Augustine', 'Kosisochukwu'];
const candidate = candidates[0];
const voters = [
    'Stephanie',
    'Rita',
    'James',
    'Peter',
    'Victor',
    'Anthony',
    'Charles',
    'Augustine',
    'Lillian',
    'Gabriel',
    'Christopher',
    'Kosisochukwu',
    'Bonaventure',
    'Abigail',
    'David',
    'Amarachi',
    'Loveth',
    'Chidimma',
    'Ifeanyi',
    'Majesty',
];
let voteCount = 0;
const poll = {
    Augustine: 0,
    Kosisochukwu: 0,
};
const result = {};
const getResult = () => result;
const getWinner = () => result.winner;
const checkResult = (candidate) => result.poll?.[candidate];
const votingRecord = {
    Stephanie: 'Kosisochukwu',
    Rita: 'Kosisochukwu',
    James: 'Kosisochukwu',
    Peter: 'Kosisochukwu',
    Victor: 'Augustine',
    Anthony: 'Kosisochukwu',
    Charles: 'Kosisochukwu',
    Augustine: 'Kosisochukwu',
    Lillian: 'Augustine',
    Gabriel: 'Kosisochukwu',
    Christopher: 'Kosisochukwu',
    Kosisochukwu: 'Kosisochukwu',
    Bonaventure: 'Augustine',
    Abigail: 'Augustine',
    David: 'Kosisochukwu',
    Amarachi: 'Kosisochukwu',
    Loveth: 'Kosisochukwu',
    Chidimma: 'Augustine',
    Ifeanyi: 'Kosisochukwu',
    Majesty: 'Augustine',
};
const determineWinner = () => {
    const entries = Object.entries(result.poll ?? poll);
    const winnerEntry = entries.reduce((highest, [candidate, votes]) => (votes > highest[1] ? [candidate, votes] : highest), ['Augustine', -1]);
    return winnerEntry[0];
};
const renderResults = () => {
    const currentPoll = result.poll ?? poll;
    const augustineVotes = currentPoll.Augustine;
    const kosisochukwuVotes = currentPoll.Kosisochukwu;
    const augustineResultEl = document.getElementById('augustine-result');
    if (augustineResultEl) {
        augustineResultEl.textContent = String(augustineVotes);
    }
    const kosisochukwuResultEl = document.getElementById('kosisochukwu-result');
    if (kosisochukwuResultEl) {
        kosisochukwuResultEl.textContent = String(kosisochukwuVotes);
    }
    const winnerValueEl = document.getElementById('winner-value');
    if (winnerValueEl) {
        winnerValueEl.textContent = result.winner ?? determineWinner();
    }
    const winnerNameEl = document.getElementById('winner-name');
    if (winnerNameEl) {
        winnerNameEl.textContent = `Our Winner is: ${result.winner ?? determineWinner()}`;
    }
};
const vote = (voter, selectedCandidate) => {
    const whichCandidate = selectedCandidate ?? votingRecord[voter];
    if (result.poll) {
        result.poll[whichCandidate] = (result.poll[whichCandidate] ?? 0) + 1;
    }
    else {
        result.poll = { ...poll };
        result.poll[whichCandidate] = (result.poll[whichCandidate] ?? 0) + 1;
    }
    result.total = (result.total ?? 0) + 1;
    result.winner = determineWinner();
    renderResults();
};
const election = (votersList) => {
    votersList.forEach((voter) => {
        vote(voter);
    });
};
const bindUi = () => {
    if (typeof document === 'undefined')
        return;
    const form = document.getElementById('vote-form');
    const voterSelect = document.getElementById('voter-name');
    const candidateSelect = document.getElementById('candidate-select');
    const feedbackEl = document.getElementById('vote-feedback');
    const modal = document.getElementById('result-modal');
    const openModalButton = document.getElementById('open-result-modal');
    const closeModalButton = document.getElementById('close-result-modal');
    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        const voter = voterSelect?.value;
        const selectedCandidate = candidateSelect?.value;
        if (!voter || !selectedCandidate)
            return;
        vote(voter, selectedCandidate);
        if (feedbackEl) {
            feedbackEl.textContent = `${voter} voted for ${selectedCandidate}`;
        }
    });
    openModalButton?.addEventListener('click', () => {
        modal?.classList.remove('hidden');
        modal?.classList.add('flex');
    });
    closeModalButton?.addEventListener('click', () => {
        modal?.classList.add('hidden');
        modal?.classList.remove('flex');
    });
};
if (typeof document !== 'undefined') {
    bindUi();
    renderResults();
}
export { getResult, getWinner, checkResult, vote, election };
