function tutorialDisplay(){
  for(let i=0;i<tutorial.length;i++){
    if(chart_time>=tutorial[i].time){
      let diff=chart_time-tutorial[i].time;
      let shifty=-5*C;
      if(diff<=tutorial[i].duration){
        graphics.push();
        graphics.noStroke();
        graphics.textSize(15*C);
        if(diff<text_fade){
          graphics.fill(255,255*diff/text_fade);
        }else if(diff>tutorial[i].duration-text_fade){
          graphics.fill(255,255*(tutorial[i].duration-diff)/text_fade);
        }else{
          graphics.fill(255);
        }
        if(tutorial[i].align==0)graphics.textAlign(LEFT,CENTER);
        else if(tutorial[i].align==1)graphics.textAlign(CENTER,CENTER);
        else graphics.textAlign(RIGHT,CENTER);
        graphics.text(tutorial[i].txt,tutorial[i].x*C,tutorial[i].y*C+shifty);
        graphics.pop();
      }
    }
  }
}