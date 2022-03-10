let list=[40,60,80];
let bs=[];
let cs=[];
let ds=[];
let es=[];
let h;

function setup() {
  createCanvas(400, 400);
  h=250;
  bs.push(new bg(0,0,400,400-h));
  bs.push(new bg(0,400-h,400,400));
  cs.push(new cur());
  for (let i=0;i<=random(3);i+=1){
  sd=random(list);
  sx=random(0+sd/2,400-sd/2);
  sy=random(150+sd/2,400-sd/2);
  ds.push(new blob(sx,sy,sd));}
  ds.forEach((v)=>{v.mx = random(-2,2),v.my = random(-2,2)})
  
  es.push(new bo());
}
  
 // 

function draw() {
  background(210);
  bs.forEach((v)=>{v.display();});
  cs.forEach((v)=>{v.display();});
  ds.forEach((v)=>{v.display();});
  es.forEach((v)=>{v.display();});
}



class bg{
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  display(){
    if(this.y<mouseY && mouseY<this.h){
      fill(130,200,200);
      strokeWeight(1);
    }
    else{
      fill(210);
      strokeWeight(0);
    }
    push();
      rect(this.x,this.y,this.w,this.h);
    pop();
  }
}



class cur{
  display(){
    push();
      strokeWeight(8);
      stroke(100);
      line(mouseX,mouseY,pmouseX,pmouseY);
    pop();
  }
}



class blob{
  constructor(x,y,d,mx,my){
    this.x=x;
    this.y=y;
    this.d=d;
    this.mx=mx;
    this.my=my;
  }
  
  display(){
    if (mouseX>this.x-this.d/2 && mouseX<this.x+this.d/2 && 
        mouseY>this.y-this.d/2 && mouseY<this.y+this.d/2)
      {fill(230,0,0)}
    else{fill(255)}
    
    push()
      strokeWeight(2);
      stroke(100);
      translate(this.x,this.y);
      circle(0,0,this.d);
    pop()
    
    if (this.x>width-this.d/2 || this.x<this.d/2) {this.mx = -1*this.mx;}
    if (this.y>height-this.d/2 || this.y<this.d/2) {this.my = -1*this.my;}
    
    if (dist(this.x,this.y,mouseX,150) <= this.d/2+8) 
    {this.my = -1*this.my;}
    else{this.my=this.my}
    
    
    this.x = this.x+this.mx;
    this.y = this.y+this.my;
    
    if (this.y-this.d/2<150){this.mx=0; this.my=0; };
    
  }
}



class bo{
  display(){
  push();
    strokeWeight(8);
    translate(mouseX,150);
    line(-30,0,30,0);
  pop();
}
}