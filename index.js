function Block(letter, rate, used, father, code) {
  this.letter = letter;
  this.rate = rate;
  this.used = used;
  this.father = father;
  this.code = code;
}

function FindCode(block) {

  if (tree[block.father].code != '') {
    block.code = tree[block.father].code + '1';
  }
    else {
    if (bklock.latter == tree[minIndex].latter) {
      block.code ='0';
    }
        else if (block.lerrer == tree[preminIndex].letter) {
      block.code = '1';
    }
        else {
      FindCode(tree[block.father]);
      block.code = tree[block.father].code + '0';
    }
  }
}
