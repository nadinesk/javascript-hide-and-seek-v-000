function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	var rankedList = document.querySelectorAll('.ranked-list');
    for (var i = 0; i < rankedList.length; i++) {
     var test = rankedList[i].querySelectorAll('li');
      for (let i = 0, l = test.length; i < l; i++) {

         test[i].innerHTML = (parseInt(test[i].innerHTML,10))+n;

       }

    }
}


function deepestChild() {
  var grandnode = document.querySelector("#grand-node");
  var children = grandnode.querySelectorAll('div');
  var childrenLength = children.length;
  var childrenLgthLessOne = childrenLength-1

  for (var i = 0; i < childrenLength; i ++ ){
    if (i == childrenLgthLessOne) {

      return children[i];

      }
    }
}
