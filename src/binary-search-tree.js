const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.parent = null;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.main = null;
	}

	root() {
		return this.main;
	}

	add(data) {
		this.main = addData(this.main, data);

		function addData(node, data) {
			if (!node) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				node.left = addData(node.left, data);
			} else {
				node.right = addData(node.right, data);
			}

			return node;
		}
	}

	has(data) {
		return isData(this.main, data);

		function isData(node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

			if(data > node.data) {
				return isData(node.right, data);
			} else {
				return isData(node.left, data);
			}
		}
	}

	find(data) {
		return searchData(this.main, data);

		function searchData(node, data) {
			if (!node) {
				return null;
			}

			if (node.data == data) {
				return node;
			}

			if (data > node.data) {
				return searchData(node.right, data);
			} else {
				return searchData(node.left, data);
			}
		}
	}

	remove(data) {
		this.main = removeData(this.main, data);

		function removeData(node, data) {
			if (!node) {
				return null;
			}

			if (data < node.data) {
				node.left = removeData(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeData(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let minRight = node.right;

				while (minRight.left) {
					minRight = minRight.left;
				}

				node.data = minRight.data;

				node.right = removeData(node.right, minRight.data);

				return node;
			}
		}

	}

	min() {
		if (!this.main) {
			return null;
		}

		let node = this.main;

		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		if (!this.main) {
			return null;
		}

		let node = this.main;
		
		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
	BinarySearchTree
};