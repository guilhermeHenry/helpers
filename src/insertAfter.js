/*
 |---------------------------------------------------
 | Insert After
 |---------------------------------------------------
 |
 | Inserir novos elementos depois de um elemento já pre-existente
 |
 */

/**
  * elementNode @object = Element to insert after of parent
  * existingNode @object = Element existing node of DOM
  */
module.exports = function(elementNode, existingNode) {
    existingNode.parentNode.insertBefore(elementNode, existingNode.nextSibling);
}
























