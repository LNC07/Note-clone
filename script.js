document.addEventListener('DOMContentLoaded', function() {
    let balance = localStorage.getItem('balance') || 0;
    let level = localStorage.getItem('level') || 1;
    let limit = localStorage.getItem('limit') || 1000;
    let botOwned = localStorage.getItem('botOwned') === 'true';
    const balanceElement = document.getElementById('balance');
    const levelElement = document.getElementById('level');
    const limitElement = document.getElementById('limit');
    const upgradeCostElement = document.getElementById('upgrade-cost');
    const limitCostElement = document.getElementById('limit-cost');
    const botCostElement = document.getElementById('bot-cost');
    const coinElement = document.getElementById('coin');
    const buyBotButton = document.getElementById('buy-bot');
    const claimButton = document.getElementById('claim-reward');
    const upgradeButton = document.getElementById('upgrade');
    const upgradeLimitButton = document.getElementById('upgrade-limit');
    
    function updateUI() {
        balanceElement.textContent = balance;
        levelElement.textContent = level;
        limitElement.textContent = limit;
        botCostElement.textContent = botOwned ? 'Owned' : '5000';
    }

    coinElement.addEventListener('click', function() {
        balance = parseInt(balance) + 1;
        localStorage.setItem('balance', balance);
        updateUI();
    });

    buyBotButton.addEventListener('click', function() {
        if (!botOwned && balance >= 5000) {
            balance -= 5000;
            botOwned = true;
            localStorage.setItem('balance', balance);
            localStorage.setItem('botOwned', true);
            updateUI();
        }
    });

    upgradeButton.addEventListener('click', function() {
        const upgradeCost = level * 500;
        if (balance >= upgradeCost) {
            balance -= upgradeCost;
            level++;
            localStorage.setItem('balance', balance);
            localStorage.setItem('level', level);
            updateUI();
        }
    });

    upgradeLimitButton.addEventListener('click', function() {
        const limitCost = limit / 1000 * 1500;
        if (balance >= limitCost) {
            balance -= limitCost;
            limit += 1000;
            localStorage.setItem('balance', balance);
            localStorage.setItem('limit', limit);
            updateUI();
        }
    });

    claimButton.addEventListener('click', function() {
        if (botOwned) {
            balance = parseInt(balance) + 1500;
            localStorage.setItem('balance', balance);
            updateUI();
        }
    });

    updateUI();
});
