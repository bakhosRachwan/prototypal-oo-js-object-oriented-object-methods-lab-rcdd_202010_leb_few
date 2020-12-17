<<<<<<< HEAD
function BoardMember (name, homeState, training){
=======
function BroadMember (name, homeState, training){
>>>>>>> d51e7a70a210f4de193e41824703d52824d3bb48
  this.name = name;
  this.homeState = homeState;
  this.training =  training;
}
<<<<<<< HEAD
 BoardMember.prototype.veto = () => {
  return `No, I must disagree`;
}
 BoardMember.prototype.approve = () => {
  return `You can do that!`;
}
BoardMember.prototype.doCharity = () => {
  return `I like to help people.`;
}
BoardMember.prototype.releasePressStatement = () => {
  return `You will see great things from Scuber.`;
}
BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
=======
 veto instanceof BroadMember{
  return `No, I must disagree`;
}
function approve (){
  return `You can do that!`;
}
function doCharity (){
  return `I loke to help people.`;
}
function releasePressStatement  (){
  return `You will see great things from Scuber.`;
}
function sayHi (){
  return `"Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`;
>>>>>>> d51e7a70a210f4de193e41824703d52824d3bb48
}
