var starttime = "2024/08/14 13:00";
var endtime = "2024/08/14 13:30";
function maintenance() {
  graphics.push();
  graphics.textFont(fontTitle);
  graphics.textAlign(CENTER, CENTER);
  graphics.textSize(70 * C);
  graphics.noStroke();
  graphics.fill(255);
  graphics.text("MelodiX", -2 * C, -20 * C);
  graphics.textSize(15 * C);
  graphics.textFont(fontRegular);
  graphics.fill(175);
  graphics.text("Game in maintenance... Please come back later.", 0, 35 * C);
  graphics.textSize(10 * C);
  graphics.text("Start time: GMT " + starttime, 0, 60 * C);
  graphics.text("Estimated end time: GMT " + endtime, 0, 70 * C);
  graphics.pop();
}