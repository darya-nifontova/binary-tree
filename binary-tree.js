'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
        if (this.root == null) 
            {this.root = new Node(data)
            }
        else {
            var current = this.root;
            var F = false;

            while (!F) {
                if (data < current.data) {
                    if (current.left == null) {      
                        current.left = new Node(data);
                        F = true;
                    } else current = current.left;
                } 
                else {
                    if (current.right == null) {
                        current.right = new Node(data);
                        F = true;
                    } else current = current.right;   
                }
            }
        }
    }

	contains(data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
