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
        var F = false;
        if (this.root == null) return F;
        else {
            var current = this.root;

            while (!F) {
                if (data == current.data) {
                    return !F;
                    F = true;
                } 
                else {
                    if (data < current.data) {
                        if (current.left == null) {
                            return F;
                            F = true;
                        }
                        else current = current.left;
                    }
                    else {
                        if (current.right == null) {
                            return F;
                            F = true;
                        }
                        else current = current.right;
                    }
                }
            }
        }
    }

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
