function scoreResult() {
    var score = document.getElementById('score').value;
    var balls = document.getElementById('balls').value;
    var wickets = document.getElementById('wickets').value;

    score = parseInt(score)
    balls = parseInt(balls)
    wickets = parseInt(wickets)

    var getScore = score;
    var getBalls = balls;
    var getWickets = wickets;


    if (isNaN(getScore) || isNaN(getBalls) || isNaN(getWickets)) {
        document.getElementById('results').innerHTML = '<p class="err-red">Please enter valid numbers.</p>';
    } else if (getScore < 0) {
        document.getElementById('result').innerHTML = '<p class="err-red">Runs should be a non-negative number.</p>';
    } else if (getBalls <= 0) {
        document.getElementById('result').innerHTML = '<p class="err-red">Balls should be a positive number.</p>';
    } else if (getWickets < 0) {
        document.getElementById('results').innerHTML = '<p class="err-red">Wickets should be a non-negative number.</p>'
    } else {
        var strikeRate = (getScore / getBalls) * 100;
        var params = new URLSearchParams({
            strikeRate: strikeRate.toFixed(2),
            score: getScore,
            balls: getBalls,
            wickets: getWickets
        });
        window.open(`results.html?${params.toString()}`, '_blank');

    }



}